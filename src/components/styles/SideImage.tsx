import styled from 'styled-components';

export default styled.img`
  object-fit: cover;
  height: 100vh;

  @media (max-width: 980px) {
    display: none;
  }
`;
