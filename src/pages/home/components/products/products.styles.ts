import styled from "styled-components";

export const ProductsContainer = styled.section`
    margin-top: 12rem;

    h1 {
        font-size: 3.2rem;
        font-weight: 800;
        font-family: ${props => props.theme["font-header"]};
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const CoffeeList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25.6rem, 1fr));
    gap: 2.7rem;
    margin-top: 4rem;
`