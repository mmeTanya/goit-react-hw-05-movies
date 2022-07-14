import styled from 'styled-components';
import { ImReply } from 'react-icons/im';
import { Link } from 'react-router-dom';

export const StyledButton = styled.button`
display: inline-block;
width: 150px;
height: 60px;
border-radius: 25px;
background-color: blue;
background-size: 40%;
background-repeat: no-repeat;
background-position: center;
opacity: 1;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;
}

&:hover,
&:focus {
opacity: 0.7;
`;

export const StyledIcon = styled(ImReply)`
  height: 40px;
  width: 40px;
`;

export const StyledLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
width: 150px;
height: 60px;
border-radius: 25px;
background-color: blue;
background-size: 40%;
background-repeat: no-repeat;
background-position: center;
opacity: 1;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;
}

&:hover,
&:focus {
opacity: 0.7;
`;
