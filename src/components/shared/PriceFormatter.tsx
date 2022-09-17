import { NumericFormat } from 'react-number-format';

interface PriceFormatterProps {
    price: number;
}

export function PriceFormatter({ price }: PriceFormatterProps) {
   
    const newPrice = String(price.toFixed(2)).replace('.', ',');
   
    return(
        <>
            {newPrice}
        </>
    )
}