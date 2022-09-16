import { createContext, ReactNode, useState } from "react";
import { Product } from "../model/product";
import { ProductItem } from "../model/product-item";

export interface CartContextProps {
    items: ProductItem[];
    removeItemFromCart: (productId: number) => void;
    addItemToCart: (product: Product) => void;
    cartCount: number;
    cartTotal: number;
}

export const CartContext = createContext({

} as CartContextProps);

interface CartContextProviderProps {
    children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const[items, setItems] = useState<ProductItem[]>([]);
    const[cartCount, setCartCount] = useState<number>(0);
    const[cartTotal, setCartTotal] = useState<number>(0);

    const removeItemFromCart = (productId: number) => {
        setItems(items.filter(item => item.product.id !== productId));
    };

    const addItemToCart = (product: Product) => {

    }

    

    return (
        <CartContext.Provider value={{ 
            items, 
            removeItemFromCart, 
            addItemToCart,
            cartCount,
            cartTotal  
        }}>
            { children }
        </CartContext.Provider>
    )
}

