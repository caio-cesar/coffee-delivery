import styled from 'styled-components';

export const Card = styled.div`
    background-color: ${props => props.theme["base-card"]};
    border-radius: 6px;
    padding: 4rem;
`

export const CardTitle = styled.span`
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1.6rem;
`

export const CardDescription = styled.span`
    color: ${props => props.theme["base-text"]};
    font-size: 1.4rem;
`
