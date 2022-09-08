import { CoffeeCard } from "../coffee-card";
import { CoffeeList, ProductsContainer } from "./products.styles";

export function Products() {
    return (
        <ProductsContainer>
            <h1>Nossos cafés</h1>

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