import styled from "styled-components";

export const CoffeCardContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    min-height: 31rem;
    width: auto;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 36px;
`

export const CoffeeImg = styled.img`
    width: 12rem;
    height: 12rem;
`

export const CoffeeBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-top: -4.5rem;
    padding: 2rem;

    p {
        color: ${props => props.theme["base-label"]};
        font-size: 1.4rem;
        text-align: center;
    }
`

export const TagContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const Tag = styled.div`
    background-color: ${props => props.theme["yellow-light"]};
    border-radius: 100px;
    text-transform: uppercase;
    padding: 0.4rem 0.8rem;
    font-weight: 700;
    color: ${props => props.theme["yellow-dark"]};
`

export const BuyContainer = styled.div`
    display: flex;
    gap: 1rem;
`
export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const Currency = styled.span`
    font-size: 1.4rem;
    color: ${props => props.theme["base-text"]};
`

export const Price = styled.span`
    font-family: ${props => props.theme["font-header"]};
    font-weight: 800;
    font-size: 2.4rem;
    color: ${props => props.theme["base-text"]};
`

export const ShoppingCartButton = styled.button`
    background-color: ${props => props.theme["purple-dark"]};
    padding: 0.8rem;
    outline: none;
    border-radius: 6px;
    color: ${props => props.theme["base-card"]};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`