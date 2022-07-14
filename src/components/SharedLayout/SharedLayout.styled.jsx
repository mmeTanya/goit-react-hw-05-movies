import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: 1px solid #73797a;
  background-color: #0b2125;
  position: fixed;
  padding: 20px 30px 0;
  height: 90px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0.92;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  min-width: 320px;
`;

export const StyledNav = styled.nav`
  margin: 0 auto;
  max-width: 1600px;
  min-width: 320px;
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
`;

export const StyledItem = styled.li`
  margin-left: 30px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 20px;

  color: #73797a;

  font-weight: 500;
  font-size: 25px;
  line-height: 1.15;
  letter-spacing: 0.02em;

  &.active,
  &:hover,
  &:focus {
    font-size: 30px;
    color: blue;
  }
`;
