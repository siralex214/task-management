import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
      background: #292F36;
      color: #FF6B6B;
      -webkit-font-smoothing: antialiased;
    }

     body,
    input,
    button,
    textarea,
    select,
    option {
        font-family: 'Roboto', sans-serif;
        line-height: 1.25;
    }
`;
