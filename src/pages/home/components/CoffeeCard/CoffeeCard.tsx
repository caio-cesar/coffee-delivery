import { 
    BuyContainer, 
    PriceContainer,
    CoffeCardContainer, 
    CoffeeBox, 
    Currency, 
    Price, 
    Tag, 
    TagContainer,
    ShoppingCartButton,
    CoffeeImg
} from "./coffee-card.styles";

import { NumericFormat } from 'react-number-format';

import { ShoppingCart } from 'phosphor-react';

import { Counter } from "../../../../components/Counter";
import { Product } from "../../../../model/product";
import { useState, useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { PriceFormatter } from "../../../../components/shared/PriceFormatter";

interface CoffeeCardProps {
    product: Product;
}

export function CoffeeCard(props: CoffeeCardProps) {
    const { name, description, price, tags, image } = props.product;
    const { addItemToCart } = useContext(CartContext);
    
    const[quantity, setQuantity] = useState(1);

    const updateQuantity = (quantityFromCounter: number): void => {
        setQuantity(quantityFromCounter);
    }

    const handleAddProductToCart = () => {
        addItemToCart({ product: props.product, 
                        quantity: quantity })
        setQuantity(1);
    }

    return (
        <CoffeCardContainer>
            <CoffeeBox>
                <CoffeeImg src={image}/>
                <TagContainer>
                    {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                </TagContainer>

                <h3>{name}</h3>
                <p>{description}</p>

                <BuyContainer>
                    <PriceContainer>
                        <Currency>R$</Currency>
                        <Price>
                            <PriceFormatter price={price} />
                        </Price>
                    </PriceContainer>
                    <Counter 
                        onIncreaseQuantity={updateQuantity} 
                        onDecreaseQuantity={updateQuantity}
                        quantity={quantity}
                    />
                    <div>
                    <ShoppingCartButton onClick={handleAddProductToCart}>
                        <ShoppingCart weight="fill" size={22} />
                    </ShoppingCartButton>
                    </div>
                </BuyContainer>
            </CoffeeBox>
        </CoffeCardContainer>
    )
}