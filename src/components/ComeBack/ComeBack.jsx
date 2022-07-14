import { useLocation } from 'react-router-dom';
import { StyledLink, StyledIcon } from './ComeBack.styled';

const ComeBack = ({location}) => {
  /* const location = useLocation(); */
  const backHref = location.state?.from ?? '/';

  return (
    <StyledLink to={backHref}>
      <StyledIcon />
    </StyledLink>
  );
};

export default ComeBack;




/* import { useLocation, useNavigate } from 'react-router-dom';
import { StyledButton, StyledIcon } from './ComeBack.styled';

const ComeBack = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const backHref = location.state?.from ?? '/';
  console.log(location);

  const onClick = () => {
    navigate({ backHref }, { replace: true });
  };

  return (
    <StyledButton type="button" onClick={onClick}>
      <StyledIcon />
    </StyledButton>
  );
};

export default ComeBack; */
