import styled from "styled-components"

import { FlexRowAToTopContainer } from "../../../../styles/shared/flex.styles"

export const PagamentoTituloContainer = styled(FlexRowAToTopContainer)`
    svg {
        color: ${props => props.theme.purple};
    }
`

interface ButtonPagamentoProps {
    selected: boolean;
}

export const ButtonPagamento = styled.button<ButtonPagamentoProps>`
    display: flex;
    align-items: center;
    gap: 1rem;
    outline: none;
    border: 1px solid ${props => props.theme["base-button"]}; 
    border-radius: 6px;
    text-transform: uppercase;
    line-height: 1.92rem;
    font-size: 1.2rem;
    background-color: ${props => props.selected ?  props.theme["base-hover"] : props.theme["base-button"]};
    padding: 1.6rem;
    cursor: pointer;
    transition: all .2s;

    &:hover {
        background-color: ${props => props.theme["base-hover"]};
    }

    svg {
        color: ${props => props.theme.purple}
    }
`
export const FormasPagamentoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 3.1rem;
`

