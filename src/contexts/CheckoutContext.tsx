import { createContext, ReactNode, useReducer } from "react"
import { FormasPagamentoEnum } from "../model/formas-pagamento"
import { CheckoutAction } from "../reducers/checkout/checkout-actions";
import { checkoutReducer, CheckoutState } from "../reducers/checkout/checkout-reducer";


interface CheckoutContextProps {
    formaPagamento: FormasPagamentoEnum | undefined;
    cep: string;
    rua: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
    updateCheckout: (checkoutState: CheckoutState) => void;
    updateFormaPagamento: (formaPagamento: FormasPagamentoEnum | undefined) => void;
}

export const CheckoutContext = createContext({

} as CheckoutContextProps)


interface CheckoutContextProviderProps {
    children: ReactNode;
}

const INITIAL_STATE: CheckoutState = {
    formaPagamento: undefined,
    cep: '',
    rua: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: ''
}

export function CheckoutContextProvider({ children }: CheckoutContextProviderProps) {
    const [checkoutState, dispatch] = useReducer(checkoutReducer, INITIAL_STATE);

    const { formaPagamento, cep, rua, complemento, bairro, cidade, uf } = checkoutState;

    const updateCheckout = (checkoutState: CheckoutState) => {
        dispatch({
            type: CheckoutAction.UPDATE_CHECKOUT,
            payload: checkoutState
        })
    }

    const updateFormaPagamento = (formaPagamento: FormasPagamentoEnum | undefined) => {
        dispatch({
            type: CheckoutAction.UPDATE_FORMA_PAGAMENTO,
            payload: formaPagamento
        })
    }

    return (
        <CheckoutContext.Provider value={{
            formaPagamento, 
            cep,
            rua,
            complemento,
            bairro,
            cidade,
            uf,
            updateCheckout,
            updateFormaPagamento
        }}>
            {children}
        </CheckoutContext.Provider>
    )
}