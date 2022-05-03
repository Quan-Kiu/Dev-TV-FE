const { createGlobalStyle } = require('styled-components');

export const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0,
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

body{
    font-size: 1.6rem;
    background: white !important;
}

ul,li{
    padding:0;
    margin:0;
    box-sizing: border-box;
    list-style-type: none;
}

.section-title{
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
}

`;
