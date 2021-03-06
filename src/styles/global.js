import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    
    outline: 0;

    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    font-size: 14px;

    background: #0d2636;

    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222222;
    
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;