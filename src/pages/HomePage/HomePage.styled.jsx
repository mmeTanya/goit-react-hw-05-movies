import styled, { keyframes } from 'styled-components';

export const StyledSection = styled.section`
  padding: 140px 30px 100px;
  text-align: center;
`;

const animation = keyframes`
0% { font-size: 35px; color: blue; }
50% { font-size: 45px; color: deepskyblue;}
100% { font-size: 35px; color: blue; }
`;

export const StyledMainTittle = styled.h1`
  margin-bottom: 45px;
  font-weight: 800;
  font-size: 35px;
  line-height: 35px;
  text-transform: uppercase;
  color: blue;
  animation: ${animation} 3s linear infinite;
`;
