import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
    gap: 2rem;
`

export const NenhumItemCarrinho = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 400px);
`