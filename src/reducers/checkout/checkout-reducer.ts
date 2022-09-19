import produce from "immer";

import { FormasPagamentoEnum } from "../../model/formas-pagamento";
import { CheckoutAction } from "./checkout-actions";


export interface CheckoutState {
    formaPagamento: FormasPagamentoEnum | undefined;
    cep: string;
    rua: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
}

export function checkoutReducer(state: CheckoutState, action: any) {
    switch(action.type) {
        case CheckoutAction.UPDATE_FORMA_PAGAMENTO:
            return produce(state, draft => {
                draft.formaPagamento = action.payload;
            })
        
        default: 
            return state;
    }
    
}