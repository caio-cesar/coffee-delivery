import styled from "styled-components";

export const SelectedCoffeeContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 2rem;

`
export const SelectedCoffeeImg = styled.img`
    width: 6.4rem;
    height: 6.4rem;
`

export const InfoContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  
    span {
        font-size: 1.6rem;
    }
`;

export const ActionsContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Price = styled.div`
    font-size: 1.6rem;
    font-weight: 700;
`

export const ButtonRemover = styled.button`
    outline: none;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: ${props => props.theme["base-text"]};
    gap: 0.5rem;
    background-color: ${props => props.theme["base-button"]};
    border-radius: 6px;
    padding: 0px 8px 0px 8px;
    cursor: pointer;

    svg {
        color: ${props => props.theme.purple}
    }
    span {
        font-size: 1.2rem;
    }


`