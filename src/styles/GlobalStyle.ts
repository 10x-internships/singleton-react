import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;

    --primary: #6ac85a;
    --primary-light: #87D37A;
    --primary-light-rgb: 135, 211, 122;
    --primary-lightest: #D2EECD;
    --primary-lightest-rgb: 210, 238, 205;
    --primary-dark: #54A048;
    --primary-dark-rgb: 84, 160, 72;

    --secondary: #793bff;
    --secondary-light: #9362FF;
    --secondary-light-rgb: 151, 59, 255;
    --secondary-lightest: #D6C4F8;
    --secondary-lightest-rgb: 214, 196, 255;
    --secondary-dark: #602FCC;
    --secondary-dark-rgb: 96, 47, 204;

    --orange: #ff6d43;
    --orange-light: #ff6e42;
    --blue: #465eff;
    --blue-light: #a9abbd;
    --yellow: #f9c45c;

    --black: #111;
    --white: #fff;
    --gray: #a0a0a0;
    --gray-light: #f8f8f8;
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
