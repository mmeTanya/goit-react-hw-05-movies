import styled from 'styled-components';

export const StyledSection = styled.section`
  aling-items: center;
  margin: 20px auto;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const StyledImage = styled.img`
  display: block;
  width: 40%;
  border-radius: 5px;
  margin-right: 30px;
`;

export const StyledMainTittle = styled.h2`
  margin-bottom: 25px;
  font-weight: 900;
  font-size: 35px;
  line-height: 35px;
  text-transform: uppercase;
`;

export const StyledTittle = styled.h3`
  margin-bottom: 15px;
  font-weight: 900;
  font-size: 27px;
  line-height: 27px;
`;

export const StyledText = styled.p`
  margin-bottom: 25px;
  font-weight: 500;
  font-size: 27px;
  line-height: 27px;
  text-align: justify;
`;
