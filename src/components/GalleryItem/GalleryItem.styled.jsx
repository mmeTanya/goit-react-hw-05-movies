import styled from 'styled-components';

export const StyledItem = styled.li`
  position: relative;
  margin-bottom: 30px;
  width: 100%;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.25s cubic-bezier(0.34, 0.04, 0.37, 0.73);
  &:hover,
  &:focus {
    transform: scale(1.03);
    box-shadow: 8px -6px 16px -2px #8c8c8c;
  }
  @media screen and (min-width: 768px) {
    margin: 15px;
    width: calc((100% - 4 * 15px) / 2);
  }
  @media screen and (min-width: 1024px) {
    width: calc((100% - 6 * 15px) / 3);
    max-width: 500px;
  }
`;

export const StyledImage = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  height: 500px;
  border-radius: 5px;
`;

export const StyledDiv = styled.div`
  padding: 20px 5px 20px;
  background-color: transparent;
  border: none;
`;

export const StyledText = styled.p`
  margin-bottom: 5px;
  font-family: Roboto;
  font-weight: 900;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
`;

export const StyledRaiting = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  font-weight: 600;
  display: block;
  width: 35px;
  padding: 11px;
  border-radius: 2px;
  background-color: blue;
  color: white;
  justify-content: right;
  text-align: center;
`;
