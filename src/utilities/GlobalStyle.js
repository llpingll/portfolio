import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.cdnfonts.com/css/general-sans');

  :root{
    --16px: 1rem;
    --24px: 1.5rem;
    --32px: 2rem;
    --40px: 2.5rem;
    --300px: 18.75rem;
  }

  html, body, main, #root {
    // height: 100%;
    margin: 0;
    padding: 0;
    background-color: black;
    // overflow: hidden;
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

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    word-wrap: break-word;
  }
`;

export default GlobalStyle;
