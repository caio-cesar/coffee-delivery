import styled from "styled-components";

export const CheckoutSuccessContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`

export const InformacoesPedidoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0rem;
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
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, #DBAC2C, #8047F8);
  background-origin: border-box;
  background-clip: content-box, border-box;
`

export const OrderInfoBox = styled.div`
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const OrderInfo = styled.div`
    display: flex;
    gap: 1rem;
    align-items: flex-start;
`


