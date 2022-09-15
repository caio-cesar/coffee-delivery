import { CoffeeTag } from "../model/coffee-tag";
import { Product } from "../model/product";

import expressoTradicional from '../assets/expresso.svg';
import expressoAmericano from '../assets/expressoAmericano.svg';
import expressoCremoso from '../assets/expressoCremoso.svg';
import expressoGelado from '../assets/expressoGelado.svg';
import cafeComLeite from '../assets/cafeComLeite.svg';
import latte from '../assets/latte.svg';
import capuccino from '../assets/capuccino.svg';
import macchiato from '../assets/macchiato.svg';
import mocaccino from '../assets/mocaccino.svg';
import chocolateQuente from '../assets/chocolateQuente.svg';
import cubano from '../assets/cubano.svg';
import havaiano from '../assets/havaiano.svg';
import arabe from '../assets/arabe.svg';
import irlandes from '../assets/irlandes.svg';

export const products: Product[] = [
    {
        id: 1,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        tags: [CoffeeTag.TRADICIONAL],
        price: 9.90,
        image: expressoTradicional
    },
    {
        id: 2,
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        tags: [CoffeeTag.TRADICIONAL],
        price: 9.90,
        image: expressoAmericano
    },
    {
        id: 3,
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        tags: [CoffeeTag.TRADICIONAL],
        price: 9.90,
        image: expressoCremoso
    },
    {
        id: 4,
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        tags: [CoffeeTag.TRADICIONAL, CoffeeTag.GELADO],
        price: 9.90,
        image: expressoGelado
    },
    {
        id: 5,
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        tags: [CoffeeTag.TRADICIONAL, CoffeeTag.COM_LEITE],
        price: 9.90,
        image: cafeComLeite
    },
    {
        id: 6,
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        tags: [CoffeeTag.TRADICIONAL, CoffeeTag.COM_LEITE],
        price: 9.90,
        image: latte
    },
    {
        id: 7,
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        tags: [CoffeeTag.TRADICIONAL, CoffeeTag.COM_LEITE],
        price: 9.90,
        image: capuccino
    },
    {
        id: 8,
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        tags: [CoffeeTag.TRADICIONAL, CoffeeTag.COM_LEITE],
        price: 9.90,
        image: macchiato
    },
    {
        id: 9,
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        tags: [CoffeeTag.TRADICIONAL, CoffeeTag.COM_LEITE],
        price: 9.90,
        image: mocaccino
    },
    {
        id: 10,
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        tags: [CoffeeTag.TRADICIONAL, CoffeeTag.COM_LEITE],
        price: 9.90,
        image: chocolateQuente
    },
    {
        id: 11,
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        tags: [CoffeeTag.ESPECIAL, CoffeeTag.ALCOOLICO, CoffeeTag.GELADO],
        price: 9.90,
        image: cubano
    },
    {
        id: 12,
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de côco',
        tags: [CoffeeTag.ESPECIAL],
        price: 9.90,
        image: havaiano
    },
    {
        id: 13,
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        tags: [CoffeeTag.ESPECIAL],
        price: 9.90,
        image: arabe
    },
    {
        id: 14,
        name: 'Irlandês',
        description: 'Bebidaa base café, uísque irlandês, açúcar e chantilly',
        tags: [CoffeeTag.ESPECIAL, CoffeeTag.ALCOOLICO],
        price: 9.90,
        image: irlandes
    }
]