import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 10.4rem;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.background};
`

export const UserActionsContainer = styled.div` 
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const LocationCard = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;

    padding: 0.8rem;
    font-size: 1.4rem;
    color: ${props => props.theme["purple"]};
    background-color: ${props => props.theme["purple-light"]};
    border-radius: 6px;
    
    span {
        line-height: 1.3;
        color: ${props => props.theme["purple-dark"]};
    }
`
export const Cart = styled.button`
    background-color: ${props => props.theme["yellow-light"]};
    padding: 0.8rem;
    outline: none;
    border-radius: 6px;
    color: ${props => props.theme["yellow-dark"]};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
`
export const CartItemCounter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme["yellow-dark"]};
    color: ${props => props.theme.white};
    font-size: 12px;
    font-weight: 700;
    border-radius: 100px;
    width: 20px;
    height: 20px;
    position: absolute;
    top: -25%;
    right: -25%;
    z-index: 99;
`