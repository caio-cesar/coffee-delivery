import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { useContext, useState } from "react";
import { CheckoutContext } from "../../../../contexts/CheckoutContext";
import { FormasPagamentoEnum } from "../../../../model/formas-pagamento";
import { CardTitle, CardDescription } from "../../../../styles/shared/card.styles";
import { FlexColumnContainer } from "../../../../styles/shared/flex.styles";
import { ButtonPagamento, FormasPagamentoContainer, PagamentoTituloContainer } from "./formas-pagamento.styles";


export function FormasPagamento() {
    const [formaPagamentoSelecionada, setFormaPagamentoSelecionada] = useState<FormasPagamentoEnum>();
    const { updateFormaPagamento } = useContext(CheckoutContext);

    const selecionarFormaPagamento = (forma: FormasPagamentoEnum) => {
        setFormaPagamentoSelecionada(forma);
        updateFormaPagamento(forma);
    }

    const isCartaoCreditoSelecionada = () => {
        return formaPagamentoSelecionada === FormasPagamentoEnum.CARTAO_CREDITO;
    }

    const isCartaoDebitoSelecionada = () => {
        return formaPagamentoSelecionada === FormasPagamentoEnum.CARTAO_DEBITO;
    }

    const isDinheiroSelecionada = () => {
        return formaPagamentoSelecionada === FormasPagamentoEnum.DINHEIRO;
    }

    return (
        <>
            <PagamentoTituloContainer gap="1rem">
                <CurrencyDollar size={22} />
                <FlexColumnContainer gap="0.5rem">
                    <CardTitle>Pagamento</CardTitle>
                    <CardDescription>O pagamento é feito na entrega. Escolha a forma que deseja pagar</CardDescription>
                </FlexColumnContainer>
            </PagamentoTituloContainer>

            <FormasPagamentoContainer>
                <ButtonPagamento selected={isCartaoCreditoSelecionada()} type="button" onClick={() => selecionarFormaPagamento(FormasPagamentoEnum.CARTAO_CREDITO)}>
                    <CreditCard size={16} />
                    <span>Cartão de Crédito</span>
                </ButtonPagamento>
                <ButtonPagamento selected={isCartaoDebitoSelecionada()} type="button" onClick={() => selecionarFormaPagamento(FormasPagamentoEnum.CARTAO_DEBITO)}>
                    <Bank size={16} />
                    <span>Cartão de Débito</span>
                </ButtonPagamento>
                <ButtonPagamento selected={isDinheiroSelecionada()} type="button"  onClick={() => selecionarFormaPagamento(FormasPagamentoEnum.DINHEIRO)}>
                    <Money size={16} />
                    <span>Dinheiro</span>
                </ButtonPagamento>
            </FormasPagamentoContainer>
        </>
    )
}