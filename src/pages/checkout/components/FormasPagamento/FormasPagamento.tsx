import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { CardTitle, CardDescription } from "../../../../styles/shared/card.styles";
import { FlexColumnContainer } from "../../../../styles/shared/flex.styles";
import { ButtonPagamento, FormasPagamentoContainer, PagamentoTituloContainer } from "./formas-pagamento.styles";

export function FormasPagamento() {
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
                <ButtonPagamento type="button">
                    <CreditCard size={16} />
                    <span>Cartão de Crédito</span>
                </ButtonPagamento>
                <ButtonPagamento type="button">
                    <Bank size={16} />
                    <span>Cartão de Débito</span>
                </ButtonPagamento>
                <ButtonPagamento type="button">
                    <Money size={16} />
                    <span>Dinheiro</span>
                </ButtonPagamento>
            </FormasPagamentoContainer>
        </>
    )
}