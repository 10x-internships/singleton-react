import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;

    --green: #6ac85a;
    --green-light: #87D37A;
    --green-lightest: #D2EECD;
    --green-dark: #54A048;

    --purple: #793bff;
    --purple-light: #9362FF;
    --purple-lightest: #D6C4F8;
    --purple-dark: #602FCC;

    --orange: #ff6d43;
    --orange-light: #ff6e42;
    --blue: #465eff;
    --blue-light: #a9abbd;
    --yellow: #f9c45c;

    -black: #111;
    -white: #fff;
    -gray: #a0a0a0;
    -gray-light: #f8f8f8;
  }

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: var(--font-weight-regular);
    line-height: 1;
  }

  a {
    text-decoration: none;
    display: inline-block;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1 {
    margin: 0;
  }
`;
export default GlobalStyle;
