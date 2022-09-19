import './App.css'

import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { ProductsContextProvider } from './contexts/ProductsContext';
import { CartContextProvider } from './contexts/CartContext';
import { CheckoutContextProvider } from './contexts/CheckoutContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <ProductsContextProvider>
          <CheckoutContextProvider>
            <CartContextProvider>
              <Router />
            </CartContextProvider>
          </CheckoutContextProvider>
        </ProductsContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
