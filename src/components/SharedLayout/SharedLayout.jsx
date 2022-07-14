import { Outlet } from 'react-router-dom';
import {
  StyledHeader,
  Container,
  StyledNav,
  StyledList,
  StyledItem,
  StyledLink,
} from './SharedLayout.styled';

const menuList = [
  { id: 1, name: 'Home', to: '/', exact: true },
  { id: 2, name: 'Movies', to: '/movies', exact: false },
];

const SharedLayout = () => {
  return (
    <Container>
      <StyledHeader>
        <StyledNav>
          <StyledList>
            {menuList.map(item => (
              <StyledItem key={item.id}>
                <StyledLink to={item.to}>{item.name}</StyledLink>
              </StyledItem>
            ))}
          </StyledList>
        </StyledNav>
      </StyledHeader>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
