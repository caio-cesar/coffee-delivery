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
    }
    
    html {
        font-size: 62.5%; /* 10px/16px = 62.5% -> 1rem = 10px */
    }

    body {
        background-color: ${props => props.theme['background']};
    }
`

