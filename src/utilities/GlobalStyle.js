import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --16px: 1rem;
    --24px: 1.5rem;
    --32px: 2rem;
    --40px: 2.5rem;
    --48px: 3rem;
    --300px: 18.75rem;
  }

  // *,
  // *::before,
  // *::after {
  //   box-sizing: border-box;
  //   padding: 0;
  //   margin: 0;
  //   word-wrap: break-word;
  // }

  // html, body, main, #root {
  //   // height: 100%;
  //   // max-width: 100%;
  //   // margin: 0;
  //   padding: 0;
  //   background-color: black;
  //   // overflow: hidden;
  // }

  html, body, #root {
    background-color: black;
    padding: 0;
    margin: 0;
  }

  * {
    scroll-behavior: smooth;
  }

  body {
    background: #010103;
    font-family: 'General Sans', sans-serif;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  body::-webkit-scrollbar,
  html::-webkit-scrollbar,
  main::-webkit-scrollbar,
  #root::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  body, html, main, #root {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;     /* Firefox */
  }
`;

export default GlobalStyle;
