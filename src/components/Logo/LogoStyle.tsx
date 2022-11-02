import styled from 'styled-components';

export default styled.div`
  font-family: 'Special Elite', cursive;
  font-size: 76px;

  div:first-child {
    color: var(--green);
  }

  div:last-child {
    color: ${(props) => props.color};
  }
`;
