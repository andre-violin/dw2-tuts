import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('http://fonts.googleapi.com/css?family=Roboto:100,300,400,500&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%;
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
  }
`;
