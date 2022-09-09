import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, ProductsContainer } from "./products.styles";

export function Products() {
    return (
        <ProductsContainer>
            <h2>Nossos cafés</h2>

            <CoffeeList>
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
            </CoffeeList>

        </ProductsContainer>
    )
}