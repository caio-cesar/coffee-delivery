import { 
    HeaderContainer, 
    LocationCard, 
    UserActionsContainer,
    Cart 
} from "./header.styles";

import { 
    MapPin, 
    ShoppingCart 
} from 'phosphor-react';

import logo from '../../assets/logo.svg';
import { Link, useNavigate } from "react-router-dom";

export function Header() {
    let navigate = useNavigate();

    const navigateToCheckout = () => {
        navigate('/checkout');
    }

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
                    <ShoppingCart weight="fill" size={22} />
                </Cart>
           </UserActionsContainer>
        </HeaderContainer>
    
    );
}