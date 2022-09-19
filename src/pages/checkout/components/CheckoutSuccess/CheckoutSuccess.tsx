import {
    CheckoutSuccessContainer,
    InformacoesPedidoContainer,
    InformacaoTitulo,
    InformacaoDescricao,
    OrderInfoContainer,
    OrderInfoBox,
    OrderInfo,
    OrderIcon,
    OrderDescription,
    GridContainer,
    DeliveryGuyBox,
    Uf
} from "./checkout-success-styles";

import {
    MapPin,
    Timer,
    CurrencyDollar
} from 'phosphor-react';

import deliveryGuy from '../../../../assets/delivery-guy.svg';
import { FormasPagamentoEnum } from "../../../../model/formas-pagamento";
import { Estados } from "../../../../data/estados";
import { useState } from "react";

type CheckoutSuccessProps = {
    rua: string;
    numero: number;
    complemento: string;
    cidade: string;
    uf: Estados;
    formaPagamento: FormasPagamentoEnum;
}

export function CheckoutSuccess(props: Partial<CheckoutSuccessProps>) {
    
    const getDescricaoFormaPagamento = (formaPagamento: FormasPagamentoEnum | undefined) => {
        switch(formaPagamento) {
            case FormasPagamentoEnum.CARTAO_CREDITO:
                return "Cartão de Crédito";
            case FormasPagamentoEnum.CARTAO_DEBITO:
                return "Cartão de Débito";
            case FormasPagamentoEnum.DINHEIRO:
                return "Dinheiro";
            default:
                return "Indefinido";
        }
    }

    return (

        <CheckoutSuccessContainer>
            <InformacoesPedidoContainer>
                <InformacaoTitulo>Uhu! Pedido confirmado</InformacaoTitulo>
                <InformacaoDescricao>Agora é só aguardar que logo o pedido chegará até você</InformacaoDescricao>

                <GridContainer>
                    <OrderInfoContainer>
                        <OrderInfoBox>
                            <OrderInfo>
                                <OrderIcon itemColor="purple">
                                    <MapPin weight="fill" />
                                </OrderIcon>
                                <OrderDescription>
                                    <span>Entrega em <strong>{props.rua}, {props.numero} {props.complemento}</strong></span>
                                    <span>{props.cidade}, <Uf>{props.uf}</Uf></span>
                                </OrderDescription>
                            </OrderInfo>
                            <OrderInfo>
                                <OrderIcon itemColor="yellow">
                                    <Timer weight="fill" />
                                </OrderIcon>
                                <OrderDescription>
                                    <span>Previsão de entrega</span>
                                    <span><strong>20 min - 30 min</strong></span>
                                </OrderDescription>
                            </OrderInfo>
                            <OrderInfo>
                                <OrderIcon itemColor="yellowDark">
                                    <CurrencyDollar weight="fill" />
                                </OrderIcon>
                                <OrderDescription>
                                    <span>Pagamento na entrega</span>
                                    <span><strong>{getDescricaoFormaPagamento(props.formaPagamento)}</strong></span>
                                </OrderDescription>
                            </OrderInfo>
                        </OrderInfoBox>
                    </OrderInfoContainer>
                    <DeliveryGuyBox>
                        <img src={deliveryGuy} />
                    </DeliveryGuyBox>
                </GridContainer>
            </InformacoesPedidoContainer>
 
        </CheckoutSuccessContainer>

    );
}