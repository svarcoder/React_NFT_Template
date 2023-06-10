import { createGlobalStyle } from "styled-components";
import { rgba } from "polished";

export const GlobalStyle = createGlobalStyle`
    
    h1, h2, h3, h4, p {
        margin: 0;
    }

    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html,
    body {
        font-size: 16px;
        height: 100%;
        scroll-behavior: smooth;
        width: 100%;
    }

    body {
        min-height: 100%;
        margin: 0;
        padding: 0;
    }
    *::-webkit-scrollbar {
        width: 12px;
        background-color: ${rgba(81, 111, 119, 0.101961)};
        border-radius: 4px;
    }
    *::-webkit-scrollbar-thumb {
        border: 2px solid transparent;
        background-color: #9CA6AD;
        border-radius: 20px;
        background-clip: content-box;
    }

    #root{
        min-height: 100vh;
        max-width: 100%;
    }
`;
