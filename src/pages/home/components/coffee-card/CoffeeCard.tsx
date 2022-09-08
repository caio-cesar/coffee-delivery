import { 
    AddToCartContainer, 
    CoffeCardContainer, 
    CoffeeBox, 
    Tag, 
    TagContainer 
} from "./coffee-card.styles";

import expresso from '../../../../assets/expresso.svg';

export function CoffeeCard() {
    return (
        <CoffeCardContainer>
            <CoffeeBox>
                <img src={expresso}/>

                <TagContainer>
                    <Tag>Tradicional</Tag>
                    <Tag>Gelado</Tag>
                </TagContainer>

                <h1>Expresso Tradicional</h1>
                <p>O tradicional café feito com água quente e grãos moídos</p>

                <AddToCartContainer>

                </AddToCartContainer>
            </CoffeeBox>
        </CoffeCardContainer>
    )
}