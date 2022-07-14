import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: -15px -15px 70px;
  }
`;
