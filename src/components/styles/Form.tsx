import styled from 'styled-components';

export default styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  input {
    border: none;
    border-bottom: 2px var(--green) solid;
    background-color: var(--bg-color);
    height: 40px;
    opacity: 1;
    margin: 5px 0;
    border-radius: 3px;
    ::placeholder {
      color: var(--grey);
    }
    :focus {
      outline: none;
      filter: brightness(0.8);
    }
  }
  button {
    height: 40px;
    background-color: var(--green);
    border: none;
    border-radius: 8px;
    margin: 5px 0;
    cursor: pointer;
    :active {
      filter: brightness(1.2);
    }
  }
`;
