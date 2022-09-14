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

export function CoffeeCard() {
    return (
        <CoffeCardContainer>
            <CoffeeBox>
                <CoffeeImg src={expresso}/>

                <TagContainer>
                    <Tag>Tradicional</Tag>
                    <Tag>Gelado</Tag>
                </TagContainer>

                <h3>Expresso Tradicional</h3>
                <p>O tradicional café feito com água quente e grãos moídos</p>

                <BuyContainer>
                    <PriceContainer>
                        <Currency>R$</Currency>
                        <Price>9,90</Price>
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