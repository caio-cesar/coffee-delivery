import {
    CheckoutSuccessContainer,
    InformacoesPedidoContainer,
    InformacaoTitulo,
    InformacaoDescricao,
    OrderInfoContainer,
    OrderInfoBox,
    OrderInfo,
    OrderIcon,
    OrderDescription,
    GridContainer,
    DeliveryGuyBox
} from "./checkout-success-styles";

import {
    MapPin,
    Timer,
    CurrencyDollar
} from 'phosphor-react';

import deliveryGuy from '../../assets/delivery-guy.svg';

export function CheckoutSuccess() {
    return (

        <CheckoutSuccessContainer>
            <InformacoesPedidoContainer>
                <InformacaoTitulo>Uhu! Pedido confirmado</InformacaoTitulo>
                <InformacaoDescricao>Agora é só aguardar que logo o pedido chegará até você</InformacaoDescricao>

                <GridContainer>
                    <OrderInfoContainer>
                        <OrderInfoBox>
                            <OrderInfo>
                                <OrderIcon itemColor="purple">
                                    <MapPin weight="fill" />
                                </OrderIcon>
                                <OrderDescription>
                                    <span>Entrega em <strong>Rua Piauí, 1386</strong></span>
                                    <span>Londrina, PR</span>
                                </OrderDescription>
                            </OrderInfo>
                            <OrderInfo>
                                <OrderIcon itemColor="yellow">
                                    <Timer weight="fill" />
                                </OrderIcon>
                                <OrderDescription>
                                    <span>Previsão de entrega</span>
                                    <span><strong>20 min - 30 min</strong></span>
                                </OrderDescription>
                            </OrderInfo>
                            <OrderInfo>
                                <OrderIcon itemColor="yellowDark">
                                    <CurrencyDollar weight="fill" />
                                </OrderIcon>
                                <OrderDescription>
                                    <span>Pagamento na entrega</span>
                                    <span><strong>Cartão de Crédito</strong></span>
                                </OrderDescription>
                            </OrderInfo>
                        </OrderInfoBox>
                    </OrderInfoContainer>
                    <DeliveryGuyBox>
                        <img src={deliveryGuy} />
                    </DeliveryGuyBox>
                </GridContainer>
            </InformacoesPedidoContainer>
 
        </CheckoutSuccessContainer>

    );
}