import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams, Outlet } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
import ComeBack from '../../components/ComeBack';
import { FetchMovieDetails } from '../../services/api';
import {
  StyledSection,
  StyledTittle,
  StyledList,
  StyledItem,
  StyledLink,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    FetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  console.log(movie);

  return (
    <StyledSection>
      <ComeBack location={location} />
      {movie && (
        <>
          <MovieCard movie={movie} />
          <StyledList>
            <StyledTittle>Additional information </StyledTittle>
            <StyledItem>
              <StyledLink
                to="cast"
                state={{ from: location.state?.from ?? '/' }}
              >
                Cast
              </StyledLink>
            </StyledItem>
            <StyledItem>
              <StyledLink
                to="reviews"
                state={{ from: location.state?.from ?? '/' }}
              >
                Reviews
              </StyledLink>
            </StyledItem>
          </StyledList>
          <div>
            <Outlet />
          </div>
        </>
      )}
    </StyledSection>
  );
};

export default MovieDetailsPage;
