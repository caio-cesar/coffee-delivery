import styled, { css } from "styled-components";
import { SelectedCoffee } from "./components/SelectedCoffee";
import { SelectedCoffeeContainer } from "./components/SelectedCoffee/selected-coffee.styles";

export const CheckoutContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
    gap: 2rem;
`
interface FlexProps {
    gap?: string;
}

export const FlexContainer = styled.div<FlexProps>`
    gap: ${props => props?.gap || '0'};
    display: flex;
`
export const FlexColumnContainer = styled(FlexContainer)`
    flex-direction: column;
`

export const FlexRowContainer = styled(FlexContainer)`
    flex-direction: row;
`

export const FlexRowAToTopContainer = styled(FlexRowContainer)`
    align-items: flex-start;
`

export const Card = styled.div`
    background-color: ${props => props.theme["base-card"]};
    border-radius: 6px;
    padding: 4rem;
`

export const EnderecoTituloContainer = styled(FlexRowAToTopContainer)`
    svg {
        color: ${props => props.theme["yellow-dark"]};
    }
`
export const PagamentoTituloContainer = styled(FlexRowAToTopContainer)`
    svg {
        color: ${props => props.theme.purple};
    }
`

export const CardTitle = styled.span`
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1.6rem;
`

export const CardDescription = styled.span`
    color: ${props => props.theme["base-text"]};
    font-size: 1.4rem;
`

export const FormGridContainer = styled.div`
    margin-top: 3rem;
    display: grid;
    gap: 2rem;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: [column-start] 20rem [column-middle-start] 27.6rem [column-middle-end] 6rem [column-end];

    & > div {
        background-color: green;
        font-size: 2rem;
    }
`

const defaultFormGap = css`
    gap: 1.5rem;
`

export const FormContainer = styled.form`
    margin-top: 3rem;

    ${FlexColumnContainer}, ${FlexRowContainer} {
        ${defaultFormGap} 
    }
`
interface InputProps {
    width?: string;
    flexGrow?: string;
}

export const Input = styled.input<InputProps>`
    background-color: ${props => props.theme["base-input"]};
    border-radius: 4px;
    padding: 1.2rem;
    border: 1px solid ${props => props.theme["base-button"]};
    width: ${props => props.width};
    flex-grow: ${props => props.flexGrow || 0};
`

export const ButtonPagamento = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    outline: none;
    border: 1px solid ${props => props.theme["base-button"]}; 
    border-radius: 6px;
    text-transform: uppercase;
    line-height: 1.92rem;
    font-size: 1.2rem;
    background-color: ${props => props.theme["base-button"]};
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
