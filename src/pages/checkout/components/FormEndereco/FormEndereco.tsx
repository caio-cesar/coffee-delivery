import { useFormContext, Controller } from "react-hook-form";

import MaskedInput from 'react-input-mask';
import { MapPinLine } from "phosphor-react";
import { FlexColumnContainer, FlexRowContainer, FlexRowAToTopContainer } from "../../../../styles/shared/flex.styles";
import { CardTitle, CardDescription } from "../../../../styles/shared/card.styles";
import { EnderecoTituloContainer, FormContainer, Input, UFInput, ValorInvalido } from "./form-endereco.styles";
import { CampoObrigatorio } from "../../../../components/shared/CampoObrigatorio";


export function FormEndereco() {
    const { register, formState: { errors }, control } = useFormContext();

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
                    <FlexColumnContainer>
                        <Controller
                            name="cep"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => (
                                <MaskedInput
                                    mask="99999-999"
                                    maskChar=""
                                    value={field.value}
                                    onChange={field.onChange}
                                >
                                    {(inputProps) => (<Input type="text" autoComplete="new-password" placeholder="CEP" width="20rem" {...inputProps} />)}
                                </MaskedInput>
                            )}
                        />
                        {errors.cep && (
                            <CampoObrigatorio />
                        )}

                    </FlexColumnContainer>
                    <FlexColumnContainer gap="0rem">
                        <Input type="text" placeholder="Rua" {...register('rua')} autoComplete="new-password" />
                        {errors.rua && (
                            <CampoObrigatorio />
                        )}
                    </FlexColumnContainer>

                    <FlexRowAToTopContainer>
                        <FlexColumnContainer>
                            <Input type="number" placeholder="Número" width="20rem" {...register('numero', { valueAsNumber: true })} autoComplete="new-password" />
                            {errors.numero && (
                                <CampoObrigatorio />
                            )}
                        </FlexColumnContainer>
                        <Input type="text" placeholder="Complemento" flexGrow="1" autoComplete="new-password" />
                    </FlexRowAToTopContainer>

                    <FlexRowContainer>
                        <FlexColumnContainer>
                            <Input type="text" placeholder="Bairro" width="20rem" {...register('bairro')} autoComplete="off" />
                            {errors.bairro && (
                                <CampoObrigatorio />
                            )}
                        </FlexColumnContainer>
                        <FlexColumnContainer>
                            <Input type="text" placeholder="Cidade" width="27.6rem" {...register('cidade')} autoComplete="off" />
                            {errors.cidade && (
                                <CampoObrigatorio />
                            )}
                        </FlexColumnContainer>
                        <FlexColumnContainer>
                            <UFInput type="text" placeholder="UF" width="6rem" {...register('uf')} maxLength={2} autoComplete="off" />
                            {errors.uf && (
                                <ValorInvalido>* UF inválida </ValorInvalido>
                            )}
                        </FlexColumnContainer>
                    </FlexRowContainer>
                </FlexColumnContainer>
            </FormContainer>
            <br />
        </>
    )
}