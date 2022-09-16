import { createContext, ReactNode, useReducer, useState } from "react";
import { ProductItem } from "../model/product-item";
import { CartActionTypes, createActionWithProductId, createAddItemToCartAction } from "../reducers/cart/cart-actions";
import { cartReducer, CartState } from "../reducers/cart/cart-reducer";

export interface CartContextProps {
    cartItems: ProductItem[];
    addItemToCart: (productItem: ProductItem) => void;
    removeItemFromCart: (productId: number) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    cartCount: number;
    cartTotal: number;
}

export const CartContext = createContext({

} as CartContextProps);

interface CartContextProviderProps {
    children: ReactNode;
}

const INITIAL_STATE: CartState = {
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    
    const[cartState, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    
    const { cartItems, cartCount, cartTotal } = cartState;

    const addItemToCart = (productItem: ProductItem) => {
        dispatch(createAddItemToCartAction(productItem));
    }

    const removeItemFromCart = (productId: number) => {
        dispatch(createActionWithProductId(CartActionTypes.REMOVE_ITEM_FROM_CART, productId));
    }

    const increaseQuantity = (productId: number) => {
        dispatch(createActionWithProductId(CartActionTypes.INCREASE_QUANTITY, productId));
    }

    const decreaseQuantity = (productId: number) => {
        dispatch(createActionWithProductId(CartActionTypes.DECREASE_QUANTITY, productId));
    }

    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addItemToCart,
            removeItemFromCart, 
            increaseQuantity,
            decreaseQuantity,
            cartCount,
            cartTotal  
        }}>
            { children }
        </CartContext.Provider>
    )
}

