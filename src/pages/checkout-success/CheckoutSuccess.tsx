import { 
    CheckoutSuccessContainer, 
    InformacoesPedidoContainer, 
    InformacaoTitulo, 
    InformacaoDescricao,
    OrderInfoContainer,
    OrderInfoBox,
    OrderInfo
} from "./checkout-success-styles";

import deliveryGuy from '../../assets/delivery-guy.svg';

export function CheckoutSuccess() {
    return (
        
        <CheckoutSuccessContainer>
            <InformacoesPedidoContainer>
                <InformacaoTitulo>Uhu! Pedido confirmado</InformacaoTitulo>
                <InformacaoDescricao>Agora é só aguardar que logo o pedido chegará até você</InformacaoDescricao>

                <OrderInfoContainer>
                    <OrderInfoBox>
                        <OrderInfo>
                            oi
                        </OrderInfo>
                        <OrderInfo>
                            oi
                        </OrderInfo>
                        <OrderInfo>
                            oi
                        </OrderInfo>
                    </OrderInfoBox>
                </OrderInfoContainer>
                
            </InformacoesPedidoContainer>
            <div>
                <img src={deliveryGuy} />
            </div>
        </CheckoutSuccessContainer>
    
    );
}