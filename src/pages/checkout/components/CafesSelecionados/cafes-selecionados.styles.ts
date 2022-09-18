import styled from "styled-components";

import { SelectedCoffeeContainer } from "../SelectedCoffee/selected-coffee.styles";


export const CoffeCardContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    min-height: 31rem;
    width: auto;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 36px;
    padding: 4rem;
`

export const SelectedCoffeeList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > li {
        position:relative;
    }

    & > li::after {
        content: "";
        position: absolute;
        display: block;
        left: 0;
        bottom: 0;
        width: 100%;
        border-bottom: 1px solid ${props => props.theme["base-button"]};
    }

    ${SelectedCoffeeContainer} {
        margin-bottom: 2rem;
        margin-top: 1rem;
    }
`

export const Summary = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 3rem;
`
export const SummaryTitle = styled.span`
  justify-self: flex-start;
  font-size: 1.4rem;
`

export const SummaryValue = styled.span`
    justify-self: flex-end;
    font-size: 1.6rem;
`

export const SummaryTotalTitle = styled.span`
    font-size: 2rem;
    font-weight: 700;
    justify-self: flex-start;
`

export const SummaryTotal = styled.span`
    font-size: 2rem;
    font-weight: 700;
    justify-self: flex-end;
`

export const ConfirmarPedidoContainer = styled.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const ConfirmarPedidoButton = styled.button`
    outline: none;
    background-color: ${props => props.theme.yellow};
    padding: 12px 8px 12px 8px;
    text-transform: uppercase;
    color: ${props => props.theme.white};
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    font-weight: 700;
    width: 100%;
    cursor: pointer;
    transition: all .2s;

    &:hover {
        background-color: ${props => props.theme["yellow-dark"]};
    }

    &:active {
        transform: translateY(3px);
    }
`
