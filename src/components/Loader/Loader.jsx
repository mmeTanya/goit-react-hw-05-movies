import { BallTriangle } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <BallTriangle color="#00BFFF" height={80} width={80} />
    </LoaderContainer>
  );
};

export default Loader;
