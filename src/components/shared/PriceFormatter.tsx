import { NumericFormat } from 'react-number-format';

interface PriceFormatterProps {
    price: number;
}

export function PriceFormatter({ price }: PriceFormatterProps) {
    return(
        <NumericFormat displayType="text" value={price} decimalScale={2} fixedDecimalScale  decimalSeparator=","/>
    )
}