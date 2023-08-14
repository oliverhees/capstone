import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --fs-h1: 1.5rem;
    --bg-color: #F8FAFC;
    --b-color-grey: #dae0e8;
    --box-shadow: -2px 2px 8px -1px rgba(80,80,80,0.7);
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  main{
   padding: 0;
   margin: 0%;
  }
`;
