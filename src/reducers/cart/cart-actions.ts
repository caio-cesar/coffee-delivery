import { ProductItem } from "../../model/product-item";

export enum CartActionTypes {
    ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
    REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
    INCREASE_QUANTITY = 'INCREASE_QUANTITY',
    DECREASE_QUANTITY = 'DECREASE_QUANTITY'
}

export function createAddItemToCartAction(productItem: ProductItem) {
    return {
        type: CartActionTypes.ADD_ITEM_TO_CART,
        payload: { productItem }
    }
}

export function createActionWithProductId(actionType: CartActionTypes, productId: number) {
    return {
        type: actionType,
        payload: { productId }
    }
}

