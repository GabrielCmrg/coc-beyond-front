import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    --green: #007500;
    --gold: #D1B000;
    --bg-color: #d0d0d0;
    --gray: #909090;
  }
  body {
    background-color: var(--bg-color);
    font-family: 'Roboto', sans-serif;
  }
  
  #root {
    min-height: 100vh;
  }
`;
