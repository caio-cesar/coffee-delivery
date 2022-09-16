import { ActionButton, CounterContainer, ImgIconAction } from "./counter.styles";
import minus from '../../assets/minus.svg';
import plus from '../../assets/plus.svg';


interface CounterProps {
    onIncreaseQuantity: (quantity: number) => void;
    onDecreaseQuantity: (quantity: number) => void;
    quantity : number;
}

export function Counter({ onIncreaseQuantity, onDecreaseQuantity, quantity }: CounterProps) {

    const increaseQuantity = () => {
        onIncreaseQuantity(quantity + 1);
    }
    const decreaseQuantity = () => {
        if (quantity <= 1) {
            onDecreaseQuantity(1);
        } else {
            onDecreaseQuantity(quantity - 1);
        }
    }

    return (
        <CounterContainer>
            <ActionButton onClick={decreaseQuantity}>
                <ImgIconAction src={minus} />
            </ActionButton>
                {quantity}
            <ActionButton onClick={increaseQuantity}>
                <ImgIconAction src={plus} />
            </ActionButton>
        </CounterContainer>
    )
}