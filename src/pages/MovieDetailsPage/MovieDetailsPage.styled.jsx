import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 140px 30px 500px;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  min-width: 320px;
`;

export const StyledTittle = styled.h3`
  margin-bottom: 30px;
  font-weight: 900;
  font-size: 30px;
  line-height: 30px;
`;

export const StyledList = styled.ul`
  display: block;
  list-style-type: disc;
  border-top: 5px solid #73797a;
  border-bottom: 5px solid #73797a;
  padding: 30px;
`;

export const StyledItem = styled.li`
  margin-bottom: 20px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  color: black;

  font-weight: 700;
  font-size: 25px;
  line-height: 1.15;
  letter-spacing: 0.02em;

  &.active,
  &:hover,
  &:focus {
    color: blue;
  }
`;
