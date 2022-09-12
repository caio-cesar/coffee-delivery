import {
    Card,
    CheckoutContainer,
    FlexColumnContainer,
    FlexRowAToTopContainer,
    EnderecoTituloContainer,
    CardTitle,
    CardDescription,
    PagamentoTituloContainer,
    FormGridContainer,
    FlexRowContainer,
    FormContainer,
    Input
    } from "./checkout.styles";

import { CurrencyDollar, MapPinLine } from "phosphor-react";

export function Checkout() {
    return (
        <CheckoutContainer>
            <FlexColumnContainer gap="2rem">
                <h4>Complete seu pedido</h4>
                <Card>
                    <EnderecoTituloContainer gap="1rem">
                        <MapPinLine size={22} />
                        <FlexColumnContainer gap="0.5rem">
                            <CardTitle>Endereço de Entrega</CardTitle>
                            <CardDescription>Informe o endereço onde deseja receber seu pedido </CardDescription>
                        </FlexColumnContainer>
                    </EnderecoTituloContainer>
                    
                    <FormContainer>
                        <FlexColumnContainer>
                            <Input type="text" placeholder="CEP" width="20rem"/>
                            <Input type="text" placeholder="Rua"/>
                            
                            <FlexRowContainer>
                                <Input type="text" placeholder="Número" width="20rem"/>
                                <Input type="text" placeholder="Complemento" flexGrow="1"/>
                            </FlexRowContainer>
                            
                            <FlexRowContainer>
                                <Input type="text" placeholder="Bairro" width="20rem"/>
                                <Input type="text" placeholder="Cidade" width="27.6rem"/>
                                <Input type="text" placeholder="UF" width="6rem"/>
                            </FlexRowContainer>
                        </FlexColumnContainer>  
                    </FormContainer>
                </Card>

                <Card>
                    <PagamentoTituloContainer gap="1rem">
                        <CurrencyDollar size={22} />
                        <FlexColumnContainer gap="0.5rem">
                            <CardTitle>Pagamento</CardTitle>
                            <CardDescription>O pagamento é feito na entrega. Escolha a forma que deseja pagar</CardDescription>
                        </FlexColumnContainer>
                    </PagamentoTituloContainer>
                </Card>
            </FlexColumnContainer>
            <FlexColumnContainer gap="2rem">
                <h4>Cafés selecionados</h4>
                <Card>
                    Cafés selecionados
                </Card>
            </FlexColumnContainer>
        </CheckoutContainer>
    )
}