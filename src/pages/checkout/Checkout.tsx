import { useNavigate } from "react-router-dom";

import { useContext } from 'react';

import {
    Card,
    CheckoutContainer,
    FlexColumnContainer,
    EnderecoTituloContainer,
    CardTitle,
    CardDescription,
    PagamentoTituloContainer,
    FlexRowContainer,
    FormContainer,
    Input,
    ButtonPagamento,
    FormasPagamentoContainer,
    CoffeCardContainer,
    SelectedCoffeeList,
    Summary,
    ConfirmarPedidoContainer,
    SummaryValue,
    SummaryTitle,
    SummaryTotal,
    SummaryTotalTitle,
    ConfirmarPedidoButton
} from "./checkout.styles";

import { 
    CurrencyDollar, 
    MapPinLine, 
    CreditCard, 
    Bank, 
    Money 
} from "phosphor-react";

import { SelectedCoffee } from "./components/SelectedCoffee";
import { CartContext } from "../../contexts/CartContext";
import { PriceFormatter } from "../../components/shared/PriceFormatter";


export function Checkout() {
    let navigate = useNavigate();

    const navigateToSuccess = () => {
        navigate('/checkout-success');
    }

    const { cartItems, cartTotal } = useContext(CartContext);

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
                            <Input type="text" placeholder="CEP" width="20rem" />
                            <Input type="text" placeholder="Rua" />

                            <FlexRowContainer>
                                <Input type="text" placeholder="Número" width="20rem" />
                                <Input type="text" placeholder="Complemento" flexGrow="1" />
                            </FlexRowContainer>

                            <FlexRowContainer>
                                <Input type="text" placeholder="Bairro" width="20rem" />
                                <Input type="text" placeholder="Cidade" width="27.6rem" />
                                <Input type="text" placeholder="UF" width="6rem" />
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

                    <FormasPagamentoContainer>
                        <ButtonPagamento>
                            <CreditCard size={16} />
                            <span>Cartão de Crédito</span>
                        </ButtonPagamento>
                        <ButtonPagamento>
                            <Bank size={16} />
                            <span>Cartão de Débito</span>
                        </ButtonPagamento>
                        <ButtonPagamento>
                            <Money size={16} />
                            <span>Dinheiro</span>
                        </ButtonPagamento>
                    </FormasPagamentoContainer>
                </Card>
            </FlexColumnContainer>
            <FlexColumnContainer gap="2rem">
                <h4>Cafés selecionados</h4>
                <CoffeCardContainer>
                    <SelectedCoffeeList>
                        { cartItems.map(cartItem => (
                            <li key={cartItem.product.id}>
                                <SelectedCoffee productItem={cartItem} />
                            </li>
                        ))}
                    </SelectedCoffeeList>
                    
                    <Summary>
                        <SummaryTitle>Total de Itens</SummaryTitle>
                        <SummaryValue>
                            R$ <PriceFormatter price={cartTotal} />
                        </SummaryValue>
                        <SummaryTitle>Entrega</SummaryTitle>
                        <SummaryValue>R$ 3,50</SummaryValue>
                        <SummaryTotalTitle>Total</SummaryTotalTitle>
                        <SummaryTotal>
                            R$ <PriceFormatter price={cartTotal + 3.50} />
                        </SummaryTotal>
                        <ConfirmarPedidoContainer>
                            <ConfirmarPedidoButton onClick={navigateToSuccess}>
                                <span>Confirmar Pedido</span>
                            </ConfirmarPedidoButton>
                        </ConfirmarPedidoContainer>
                    </Summary>
                    
                </CoffeCardContainer>
            </FlexColumnContainer>
        </CheckoutContainer>
    )
}