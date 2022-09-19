import { 
    ActionsContainer, 
    ButtonRemover, 
    InfoContainer, 
    Price, 
    PriceContainer, 
    SelectedCoffeeContainer,
    SelectedCoffeeImg,
    SubTotal
} from "./selected-coffee.styles";

import { Counter } from "../../../../components/Counter";
import { Trash } from 'phosphor-react';
import { ProductItem } from "../../../../model/product-item";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { PriceFormatter } from "../../../../components/shared/PriceFormatter";

interface SelectedCoffeeProps {
    productItem: ProductItem;
}

export function SelectedCoffee({ productItem } : SelectedCoffeeProps) {
    
    const { removeItemFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const handleRemoveItem = () => {
        removeItemFromCart(productItem.product.id);
    }

    const handleIncreaseQuantity = (quantity: number) => {
        increaseQuantity(productItem.product.id);
    }

    const handleDecreaseQuantity = (quantity: number) => {
        decreaseQuantity(productItem.product.id);
    }

    const subTotal = productItem.quantity * productItem.product.price;

    return (
        <SelectedCoffeeContainer>
            <SelectedCoffeeImg src={productItem.product.image}/>
            <InfoContainer>
                <span>{productItem.product.name}</span>
                <ActionsContainer>
                    <Counter 
                        onIncreaseQuantity={handleIncreaseQuantity} 
                        onDecreaseQuantity={handleDecreaseQuantity}
                        quantity={productItem.quantity}
                    />
                    <ButtonRemover type="button" onClick={handleRemoveItem}>
                        <Trash size={16} />
                        <span>Remover</span>
                    </ButtonRemover>
                </ActionsContainer>
            </InfoContainer>
            <PriceContainer>
                <Price>
                    R$ <PriceFormatter price={productItem.product.price} />
                </Price>
                <SubTotal>
                    <br />
                    <strong>R$ <PriceFormatter price={subTotal} /></strong>
                </SubTotal>
            </PriceContainer>
        </SelectedCoffeeContainer>
    );
}