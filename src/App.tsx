import './App.css'

import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { ProductsContextProvider } from './contexts/ProductsContext';
import { CartContextProvider } from './contexts/CartContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <ProductsContextProvider>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </ProductsContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
