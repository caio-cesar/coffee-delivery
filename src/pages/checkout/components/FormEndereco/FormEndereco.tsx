import { MapPinLine } from "phosphor-react";
import { FlexColumnContainer, FlexRowContainer } from "../../../../styles/shared/flex.styles";
import { CardTitle, CardDescription } from "../../../../styles/shared/card.styles";
import { EnderecoTituloContainer, FormContainer, Input } from "./form-endereco.styles";


export function FormEndereco() {
    return (
        <>
            <EnderecoTituloContainer gap="1rem">
                <MapPinLine size={22} />
                <FlexColumnContainer gap="0.5rem">
                    <CardTitle>Endereço de Entrega</CardTitle>
                    <CardDescription>Informe o endereço onde deseja receber seu pedido </CardDescription>
                </FlexColumnContainer>
            </EnderecoTituloContainer>

            <FormContainer>
                <FlexColumnContainer>
                    <Input type="text" placeholder="CEP" width="20rem" />
                    <Input type="text" placeholder="Rua" />

                    <FlexRowContainer>
                        <Input type="text" placeholder="Número" width="20rem" />
                        <Input type="text" placeholder="Complemento" flexGrow="1" />
                    </FlexRowContainer>

                    <FlexRowContainer>
                        <Input type="text" placeholder="Bairro" width="20rem" />
                        <Input type="text" placeholder="Cidade" width="27.6rem" />
                        <Input type="text" placeholder="UF" width="6rem" />
                    </FlexRowContainer>
                </FlexColumnContainer>
            </FormContainer>
        </>
    )
}