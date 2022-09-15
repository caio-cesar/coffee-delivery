import { CoffeeTag } from "./coffee-tag";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    tags: CoffeeTag[];
    image: string;
}