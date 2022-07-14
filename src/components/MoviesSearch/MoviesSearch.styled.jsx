import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 55%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin: 0 auto 50px;
`;

export const StyledButton = styled.button`
display: inline-block;
position: absolute;
width: 65px;
height: 57px;
border: 0;
background-color: blue;
background-size: 40%;
background-repeat: no-repeat;
background-position: center;
opacity: 1;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;
}

&:hover {
opacity: 0.6;
`;

export const StyledInput = styled.input`
display: inline-block;
width: 100%;
height: 55px;
font: inherit;
font-size: 20px;
border: 4px solid blue;
border-radius: 4px;
outline: none;
padding-left: 70px;
padding-right: 5px;
}

&::placeholder {
font: inherit;
font-size: 23px;
`;
export const StyledIcon = styled(ImSearch)`
  height: 40px;
  width: 40px;
`;
