import styled, {css} from "styled-components";

import { 
    FlexColumnContainer, 
    FlexRowAToTopContainer,
    FlexRowContainer
} from "../../../../styles/shared/flex.styles";

export const EnderecoTituloContainer = styled(FlexRowAToTopContainer)`
svg {
    color: ${props => props.theme["yellow-dark"]};
}
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
