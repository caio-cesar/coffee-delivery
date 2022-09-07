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

export function Header() {
    return (
        <HeaderContainer>
           <img src={logo} />

           <UserActionsContainer>
                <LocationCard>
                    <MapPin weight="fill" size={22}/>
                    <span>Londrina, PR </span>
                </LocationCard>
                <Cart>
                    <ShoppingCart weight="fill" size={22} />
                </Cart>
           </UserActionsContainer>
        </HeaderContainer>
    
    );
}