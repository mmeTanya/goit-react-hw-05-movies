import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { FetchMoviesByQuery } from '../../services/api';
import Loader from '../../components/Loader';
import MoviesSearch from '../../components/MoviesSearch';
import Gallery from '../../components/Gallery';
import { StyledSection, StyledText } from './MoviesPage.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MoviesPage = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  
  const [query, setQuery] = useState(name);
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    if (!query) {
      return;
    }
    setMovies([]);
    setStatus(Status.PENDING);
    FetchMoviesByQuery(query)
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
  }, [query]);

  const handleFormSubmit = query => {
    setQuery(query);
  };

  return (
    <StyledSection>
      <MoviesSearch onSubmited={handleFormSubmit} />
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && <Gallery movies={movies} />}
      {status === Status.REJECTED && (
        <StyledText>Sorry, we do not find movies with query {query}</StyledText>
      )}
    </StyledSection>
  );
};

export default MoviesPage;
