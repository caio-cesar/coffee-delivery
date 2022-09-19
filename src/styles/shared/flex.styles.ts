import styled from 'styled-components';

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
export const FlexRowAtBottomContainer = styled(FlexRowContainer)`
    align-items: flex-end;
`

