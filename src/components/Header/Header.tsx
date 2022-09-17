import { Link, useNavigate } from "react-router-dom";

import { 
    HeaderContainer, 
    LocationCard, 
    UserActionsContainer,
    Cart, 
    CartItemCounter
} from "./header.styles";

import { 
    MapPin, 
    ShoppingCart 
} from 'phosphor-react';

import logo from '../../assets/logo.svg';
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export function Header() {
    let navigate = useNavigate();

    const navigateToCheckout = () => {
        navigate('/checkout');
    }

    const { cartCount } = useContext(CartContext);

    return (
        <HeaderContainer>
            <Link to="/">
                <img src={logo} />
            </Link>

           <UserActionsContainer>
                <LocationCard>
                    <MapPin weight="fill" size={22}/>
                    <span>Londrina, PR </span>
                </LocationCard>
                <Cart onClick={navigateToCheckout}>
                    { cartCount > 0 && (
                        <CartItemCounter>
                        <span>{cartCount}</span>
                        </CartItemCounter>
                    )}
                    <ShoppingCart weight="fill" size={22} />
                </Cart>
           </UserActionsContainer>
        </HeaderContainer>
    
    );
}