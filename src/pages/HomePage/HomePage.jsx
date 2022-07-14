import { useState, useEffect } from 'react';
import { FetchTrendingMovies } from '../../services/api';
import Gallery from '../../components/Gallery';
import Loader from '../../components/Loader';
import { StyledSection, StyledMainTittle } from './HomePage.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setMovies([]);
    setStatus(Status.PENDING);
    FetchTrendingMovies()
      .then(data => {
        if (data.results.length !== 0) {
          console.log(data.results);
          setMovies(data.results);
          setStatus(Status.RESOLVED);
          return;
        }
        setStatus(Status.REJECTED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  return (
    <StyledSection>
      <StyledMainTittle>Trending movies today</StyledMainTittle>
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && <Gallery movies={movies} />}
      {status === Status.REJECTED && (
        <p>Sorry, we do not find the trending movies</p>
      )}
    </StyledSection>
  );
};

export default HomePage;
