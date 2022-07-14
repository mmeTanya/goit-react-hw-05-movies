import styled from 'styled-components';

export const StyledSection = styled.section`
  margin: 20px auto;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px;
  padding: 20px;
  width: 300px;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  transition: all 0.25s cubic-bezier(0.34, 0.04, 0.37, 0.73);
  &:hover,
  &:focus {
    transform: scale(1.03);
    box-shadow: 8px -6px 16px -2px #8c8c8c;
  }
`;

export const StyledImage = styled.img`
  display: block;
  width: 50%;
  margin: 0 auto 30px;
  border-radius: 5px;
`;

export const StyledTittle = styled.h3`
  margin-bottom: 15px;
  font-weight: 900;
  font-size: 25px;
  line-height: 25px;
 
`;

export const StyledText = styled.p`
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
 
`;
