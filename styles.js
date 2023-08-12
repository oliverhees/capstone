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
