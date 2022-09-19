import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';

import { Estados } from "../../data/estados";
import { CheckoutContainer, NenhumItemCarrinho } from "./checkout.styles";
import { FlexColumnContainer } from "../../styles/shared/flex.styles";
import { Card } from "../../styles/shared/card.styles";

import { FormEndereco } from "./components/FormEndereco";
import { FormasPagamento } from "./components/FormasPagamento";
import { CafesSelecionados } from "./components/CafesSelecionados";
import { useContext, useEffect, useState } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import { CampoObrigatorio } from "../../components/shared/CampoObrigatorio";
import { CartContext } from "../../contexts/CartContext";


export function Checkout() {
    const { updateFormaPagamento, formaPagamento } = useContext(CheckoutContext);
    const { cartItems } = useContext(CartContext);
    const [validado, setValidado] = useState(false);

    const showCheckoutPage: boolean = cartItems && cartItems.length > 0;

    useEffect(() => {
        updateFormaPagamento(undefined);
    }, []);

    const enderecoFormValidationSchema = zod.object({
        cep: zod.string().min(9, 'CEP obrigatório'),
        rua: zod.string().min(1, 'Informe a rua'),
        numero: zod.number().min(1, 'Informe o número'),
        complemento: zod.string().optional(),
        bairro: zod.string().min(1, 'Informe a tarefa'),
        cidade: zod.string().min(1, 'Informe a tarefa'),
        uf: zod.nativeEnum(Estados)
    })

    type EnderecoFormData = zod.infer<typeof enderecoFormValidationSchema>;

    const enderecoForm = useForm<EnderecoFormData>({
        resolver: zodResolver(enderecoFormValidationSchema),
        defaultValues: {
            cep: '',
            rua: '',
            complemento: '',
            bairro: '',
            cidade: ''
        }
    });

    const { handleSubmit, reset } = enderecoForm;

    function handleCreateNovoPedido(data: EnderecoFormData) {
        setValidado(true);

        if (!formaPagamento) {
            return;
        }

        alert(JSON.stringify(data));
        reset();
    }

    return (
        showCheckoutPage ?
            (<form onSubmit={handleSubmit(handleCreateNovoPedido)} autoComplete="new-password">
                <CheckoutContainer>
                    <FlexColumnContainer gap="2rem">
                        <h4>Complete seu pedido</h4>
                        <Card>
                            <FormProvider {...enderecoForm}>
                                <FormEndereco />
                            </FormProvider>
                        </Card>
                        <Card>

                            {(validado && !formaPagamento) && (
                                <>
                                    <CampoObrigatorio />
                                    <br />
                                    <br />
                                </>
                            )}

                            <FormasPagamento />
                        </Card>
                    </FlexColumnContainer>
                    <FlexColumnContainer gap="2rem">
                        <h4>Cafés selecionados</h4>
                        <CafesSelecionados />
                    </FlexColumnContainer>
                </CheckoutContainer>
            </form>) : (
                <NenhumItemCarrinho>
                    <h2>
                        Você não possui nenhum item no carrinho !
                    </h2>
                </NenhumItemCarrinho>
            )
    )
}