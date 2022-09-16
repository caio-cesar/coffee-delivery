import { ProductItem } from "../../model/product-item";
import { CartActionTypes } from "./cart-actions";
import { produce } from 'immer';
import { WritableDraft } from "immer/dist/internal";

interface CartState {
    cartItems: ProductItem[];
    cartCount: number;
    cartTotal: number;
}

const getQuantity = (items: ProductItem[]): number => {
    return items.reduce((total, cartItem) => total + cartItem.quantity, 0);
}

const getCartTotal = (items: ProductItem[]): number => {
    return items.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.product.price), 0);
}

const updateCartState = (draft: WritableDraft<CartState>) => {
    draft.cartCount = getQuantity(draft.cartItems);
    draft.cartTotal = getCartTotal(draft.cartItems);
}

export function cartReducer(state: CartState, action: any) {
    
    switch(action.type) {
        case CartActionTypes.ADD_ITEM_TO_CART: {
            return produce(state, draft => {
                const productItem: ProductItem = action.payload.productItem;
                const existingProductItemIndex = draft.cartItems.findIndex(c => c.product.id === productItem.product.id);

                if (existingProductItemIndex < 0) {
                    draft.cartItems.push(productItem); 
                } else {
                    draft.cartItems[existingProductItemIndex].quantity = 
                    draft.cartItems[existingProductItemIndex].quantity + productItem.quantity;
                }
                updateCartState(draft);
            })
        }
        case CartActionTypes.REMOVE_ITEM_FROM_CART: {
            const productItem: ProductItem = action.payload.productItem;
            const existingProductItemIndex = state.cartItems.findIndex(c => c.product.id === productItem.product.id);

            if (existingProductItemIndex < 0) {
                return state;
            }

            return produce(state, draft => {
                draft.cartItems = draft.cartItems.splice(existingProductItemIndex, 1);
                updateCartState(draft);
            })
        }

        case CartActionTypes.INCREASE_QUANTITY: {

            return produce(state, draft => {
                const productItemIndex = state.cartItems.findIndex(item => item.product.id === action.payload.productId);
                if (productItemIndex >= 0) {
                    draft.cartItems[productItemIndex].quantity = draft.cartItems[productItemIndex].quantity + 1;
                }
            })
        }

        case CartActionTypes.DECREASE_QUANTITY: {
            return produce(state, draft => {
                const productItemIndex = state.cartItems.findIndex(item => item.product.id === action.payload.productId);
                
                if (productItemIndex >= 0) {
                    const productItem: ProductItem = draft.cartItems[productItemIndex];

                    if (productItem.quantity <= 1) {
                        draft.cartItems = draft.cartItems.splice(productItemIndex, 1);
                    } else {
                        productItem.quantity = productItem.quantity - 1;
                    }
                }
            })
        }

    }
}