import styled from "styled-components";

export const CounterContainer = styled.div`
    background-color: ${props => props.theme["base-button"]};
    padding: 0.8rem;
    border-radius: 6px;
    color: ${props => props.theme["base-title"]};
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
`

export const ActionButton = styled.button`
    cursor: pointer;
    outline: none;
    background-color: transparent;

`
export const ImgIconAction = styled.img`
        width: 1.4rem;
        height: 1.4rem; 
`