import { 
    ActionsContainer, 
    ButtonRemover, 
    InfoContainer, 
    Price, 
    SelectedCoffeeContainer,
    SelectedCoffeeImg
} from "./selected-coffee.styles";

import { Counter } from "../../../../components/Counter";
import { Trash } from 'phosphor-react';
import { ProductItem } from "../../../../model/product-item";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { PriceFormatter } from "../../../../components/shared/PriceFormatter";

interface SelectedCoffeeProps {
    productItem: ProductItem;
}

export function SelectedCoffee({ productItem } : SelectedCoffeeProps) {
    const [quantity, setQuantity] = useState(productItem.quantity);

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
                    <ButtonRemover onClick={handleRemoveItem}>
                        <Trash size={16} />
                        <span>Remover</span>
                    </ButtonRemover>
                </ActionsContainer>
            </InfoContainer>
            <Price>
                R$ <PriceFormatter price={productItem.product.price} />
            </Price>
        </SelectedCoffeeContainer>
    );
}