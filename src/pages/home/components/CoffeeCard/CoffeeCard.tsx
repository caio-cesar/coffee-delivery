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

import { ShoppingCart } from 'phosphor-react';

import expresso from '../../../../assets/expresso.svg';
import { Counter } from "../../../../components/Counter";
import { Product } from "../../../../model/product";

interface CoffeeCardProps {
    product: Product;
}

export function CoffeeCard(props: CoffeeCardProps) {
    const  { name, description, price, tags, image } = props.product;
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
                        <Price>{price}</Price>
                    </PriceContainer>
                    <Counter />
                    <div>
                    <ShoppingCartButton>
                        <ShoppingCart weight="fill" size={22} />
                    </ShoppingCartButton>
                    </div>
                </BuyContainer>
            </CoffeeBox>
        </CoffeCardContainer>
    )
}