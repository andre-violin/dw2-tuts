import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 14px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #3E3E3E;
    /* font-family: 'Roboto', sans-serif; */
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
  }

  h2 {
    font-size: 1.6em;
    font-weight: bold;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;
