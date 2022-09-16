import { useContext } from "react";
import { ProductsContext } from "../../../../contexts/ProductsContext";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, ProductsContainer } from "./products.styles";

export function Products() {
    const { products } = useContext(ProductsContext);

    return (
        <ProductsContainer>
            <h2>Nossos cafés</h2>
            <CoffeeList>
                {products.map(product => <CoffeeCard product={product} key={product.id} />)}
            </CoffeeList>
        </ProductsContainer>
    )
}