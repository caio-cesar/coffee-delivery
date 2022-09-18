import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PriceFormatter } from "../../../../components/shared/PriceFormatter";
import { CartContext } from "../../../../contexts/CartContext";
import { SelectedCoffee } from "../SelectedCoffee";
import { 
    CoffeCardContainer, 
    SelectedCoffeeList,
    Summary,
    SummaryTitle,
    SummaryTotalTitle,
    SummaryTotal,
    SummaryValue,
    ConfirmarPedidoContainer,
    ConfirmarPedidoButton
 } from "./cafes-selecionados.styles";

export function CafesSelecionados() {
    let navigate = useNavigate();

    const navigateToSuccess = () => {
        navigate('/checkout-success');
    }

    const { cartItems, cartTotal } = useContext(CartContext);
   
    return (
        <CoffeCardContainer>
            <SelectedCoffeeList>
                {cartItems.map(cartItem => (
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
    )
}