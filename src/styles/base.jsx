import { css } from 'styled-components';

const base = css`
  :root {
    --white-1: #f4f5f7;
    --white-2: #f1f1f1;
    --purple-1: #aca0eb;
    --purple-2: #7f6aee;
  }

  html {
    font-family: SUIT-Regular, Roboto, system-ui, 'Segoe UI', Helvetica, Arial,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    font-size: 62.5%;
  }

  body {
    background-color: var(--white-1);
  }

  h1 {
    font-family: SUIT-Bold, sans-serif;
    font-size: 3.6rem;
  }

  h2 {
    font-family: SUIT-Bold, sans-serif;
    font-size: 3.2rem;
  }

  h3 {
    font-family: SUIT-Bold, sans-serif;
    font-size: 2.8rem;
  }

  h4 {
    font-family: SUIT-Bold, sans-serif;
    font-size: 2.4rem;
  }

  h5 {
    font-family: SUIT-Bold, sans-serif;
    font-size: 2rem;
  }

  button {
    cursor: pointer;
  }
`;

export default base;
