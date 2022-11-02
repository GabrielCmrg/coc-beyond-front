import styled from 'styled-components';

type Props = {
  color: string;
  fontSize: number;
};

export default styled.div<Props>`
  font-family: 'Special Elite', cursive;
  font-size: ${(props) => props.fontSize}px;

  div:first-child {
    color: var(--green);
  }

  div:last-child {
    color: ${(props) => props.color};
  }
`;
