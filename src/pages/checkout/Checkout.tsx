import { CheckoutContainer } from "./checkout.styles";

import { FormEndereco } from "./components/FormEndereco";
import { FlexColumnContainer } from "../../styles/shared/flex.styles";
import { Card } from "../../styles/shared/card.styles";
import { FormasPagamento } from "./components/FormasPagamento";
import { CafesSelecionados } from "./components/CafesSelecionados";


export function Checkout() {

    return (
        <CheckoutContainer>
            <FlexColumnContainer gap="2rem">
                <h4>Complete seu pedido</h4>
                <Card>
                  <FormEndereco />
                </Card>

                <Card>
                   <FormasPagamento />
                </Card>
            </FlexColumnContainer>
            <FlexColumnContainer gap="2rem">
                <h4>Cafés selecionados</h4>
                <CafesSelecionados />
            </FlexColumnContainer>
        </CheckoutContainer>
    )
}