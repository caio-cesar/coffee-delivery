import { createContext, ReactNode, useReducer, useState } from "react";
import { ProductItem } from "../model/product-item";
import { CartActionTypes, createActionWithProductId, createAddItemToCartAction, createClearItemsAction } from "../reducers/cart/cart-actions";
import { cartReducer, CartState, INITIAL_CART_STATE } from "../reducers/cart/cart-reducer";

export interface CartContextProps {
    cartItems: ProductItem[];
    addItemToCart: (productItem: ProductItem) => void;
    removeItemFromCart: (productId: number) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    clearItems: () => void;
    cartCount: number;
    cartTotal: number;
}

export const CartContext = createContext({

} as CartContextProps);

interface CartContextProviderProps {
    children: ReactNode;
}


export function CartContextProvider({ children }: CartContextProviderProps) {
    
    const[cartState, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);
    
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

    const clearItems = () => {
        dispatch(createClearItemsAction());
    }

    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addItemToCart,
            removeItemFromCart, 
            increaseQuantity,
            decreaseQuantity,
            clearItems,
            cartCount,
            cartTotal  
        }}>
            { children }
        </CartContext.Provider>
    )
}

