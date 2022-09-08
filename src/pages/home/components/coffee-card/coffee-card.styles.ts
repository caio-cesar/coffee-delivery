import styled from "styled-components";

export const CoffeCardContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    min-height: 31rem;
    width: auto;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 36px;

    img {
        width: 12rem;
        height: 12rem;
    }
`

export const CoffeeBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-top: -4.5rem;
    padding: 2rem;

    h1 {
        font-family: ${props => props.theme["font-header"]};
        font-weight: 700;
        color: ${props => props.theme["base-subtitle"]};
        font-size: 2rem;
    }

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

export const AddToCartContainer = styled.div`
    display: flex;
`