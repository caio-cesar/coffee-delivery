import { createContext, ReactNode, useState } from "react";
import { Product } from "../model/product";
import { productList } from '../data/product-list';

interface ProductsContextProps {
    products: Product[]
}

interface ProductsContextProviderProps {
    children: ReactNode;
}

export const ProductsContext = createContext({

} as ProductsContextProps);


export function ProductsContextProvider({ children }: ProductsContextProviderProps) {

    const [products, setProducts] = useState<Product[]>(productList);

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}