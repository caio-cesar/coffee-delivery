import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout';
import { CheckoutSuccess } from './pages/checkout-success';
import { Checkout } from './pages/checkout/Checkout';
import { Home } from './pages/home';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/checkout-success" element={<CheckoutSuccess />} />
            </Route>
        </Routes>
    )
}
