import styled from "styled-components";

export const IntroContainer = styled.section`
    display: flex;
    align-items: flex-start;
    margin-top: 9rem;
`;

export const IntroText = styled.div`
    display: flex;
    flex-direction: column;
    width: 58.8rem;
    gap: 1.8rem;

    span {
        color: ${props => props.theme["base-subtitle"]};
        font-size: 2rem;
        line-height: 2.6rem;
    }
`;

export const IntroImg = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
`

export const IntroItemContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, minmax(min-content, max-content));
    gap: 2rem;
    column-gap: 4rem;
    margin-top: 5rem;
`

export const IntroItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
        font-size: 1.6rem;
    }
`

const ITEM_COLORS = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    purple: 'purple',
    baseText: 'base-text'
}  as const

interface IntroItemIconProps {
    itemColor: keyof typeof ITEM_COLORS;
}

export const IntroItemIcon = styled.div<IntroItemIconProps>`
    width: 3.2rem;
    height: 3.2rem;
    padding: 0.8rem;
    border-radius: 1000px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme[ITEM_COLORS[props.itemColor]]};

    svg {
        width: 1.6rem;
        height: 1.6rem;
    }
`