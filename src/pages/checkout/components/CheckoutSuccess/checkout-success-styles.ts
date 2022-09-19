import styled from "styled-components";

export const CheckoutSuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const InformacoesPedidoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8rem;
`

export const InformacaoTitulo = styled.h1`
    font-size: 3.2rem;
    color: ${props => props.theme["yellow-dark"]};
    line-height: 4.16rem;
`

export const InformacaoDescricao = styled.span`
    font-size: 2rem;
    color: ${props => props.theme["base-subtitle"]};
    line-height: 2.6rem;
`

export const OrderInfoContainer = styled.div`
  margin-top: 5rem;
  border: double 1.59px transparent;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  background-image: 
    linear-gradient(${props => props.theme.background}, ${props => props.theme.background}), 
    radial-gradient(circle at top left, #DBAC2C, #8047F8);
  background-origin: border-box;
  background-clip: content-box, border-box;
`

export const OrderInfoBox = styled.div`
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const OrderInfo = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
`

const ITEM_COLORS = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    purple: 'purple'
}  as const

interface OrderIconProps {
    itemColor: keyof typeof ITEM_COLORS;
}

export const OrderIcon = styled.div<OrderIconProps>`
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

export const OrderDescription = styled.div`
    display: flex;
    flex-direction: column;

    & > span {
        font-size: 1.6rem;
    }
`
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`
export const DeliveryGuyBox = styled.div`
    justify-self: flex-end;
`

export const Uf = styled.span`
    text-transform: uppercase;
`
