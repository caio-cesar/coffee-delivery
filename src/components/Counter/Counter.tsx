import { ActionButton, CounterContainer, ImgIconAction } from "./counter.styles";
import minus from '../../assets/minus.svg';
import plus from '../../assets/plus.svg';
import { useState } from "react";

export function Counter() {

    const [quantity, setQuantity] = useState<number>(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity <= 1) {
            setQuantity(1);
        } else {
            setQuantity(quantity - 1);
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