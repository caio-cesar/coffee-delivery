import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button {
        font-family: ${props => props.theme['font-text']};
        color: ${props => props.theme['base-text']};
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        font-smooth: auto;
    }
    
    html {
        font-size: 62.5%; /* 10px/16px = 62.5% -> 1rem = 10px */
    }

    body {
        background-color: ${props => props.theme['background']};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${props => props.theme['font-header']};
        color: ${props => props.theme['base-subtitle']};
    }

    h1, h2 {
        font-weight: 800;
    }

    h3, h4, h5, h6 {
        font-weight: 700;
    }

    h1 {
        font-size: 4.8rem;
        color: ${props => props.theme['base-title']};
        line-height: 6.24rem;
    }

    h2 {
        font-size: 3.2rem;
    }
    
    h3 {
        font-size: 2rem;
    }

    h4 {
        font-size: 1.8rem;
    }
`

