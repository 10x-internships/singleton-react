import { createGlobalStyle } from 'styled-components';

export const palette = {
  primary: {
    main: '#6ac85a',
    light: '#87d37a',
    lightest: '#d2eecd',
    dark: '#54A048',
  },
  secondary: {
    main: '#793bff',
    light: '#9362FF',
    lightest: '#D6C4F8',
    dark: '#602FCC',
  },
  accent: {
    orange: '#ff6d43',
    orangeLight: '#ff6e42',
    blue: '#465eff',
    blueLight: '#a9abbd',
    yellow: '#f9c45c',
  },
  neutral: {
    white: '#fff',
    black: '#111',
    gray: '#a0a0a0',
    grayLight: '#f8f8f8',
  },
};

const GlobalStyle = createGlobalStyle`
  :root {
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;
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
    font-size: 16px;
    font-weight: var(--font-weight-regular);
    color: ${palette.neutral.black};
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
