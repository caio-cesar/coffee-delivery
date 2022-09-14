import { 
    ActionsContainer, 
    ButtonRemover, 
    InfoContainer, 
    Price, 
    SelectedCoffeeContainer,
    SelectedCoffeeImg
} from "./selected-coffee.styles";
import expresso from '../../../../assets/expresso.svg';
import { Counter } from "../../../../components/Counter";
import { Trash } from 'phosphor-react';

export function SelectedCoffee() {
    return (
        <SelectedCoffeeContainer>
            <SelectedCoffeeImg src={expresso}/>
            <InfoContainer>
                <span>Expresso Tradicional</span>
                <ActionsContainer>
                    <Counter />
                    <ButtonRemover>
                        <Trash size={16} />
                        <span>Remover</span>
                    </ButtonRemover>
                </ActionsContainer>
            </InfoContainer>
            <Price>
                R$ 9,90
            </Price>
        </SelectedCoffeeContainer>
    );
}