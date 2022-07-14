import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  StyledItem,
  StyledImage,
  StyledDiv,
  StyledText,
  StyledRaiting,
} from './GalleryItem.styled';

const GalleryItem = ({ movie }) => {
  const location = useLocation();

  return (
    <StyledItem>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.poster_path ? (
          <StyledImage
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            loading="lazy"
          />
        ) : (
          <StyledImage
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            alt={movie.title}
          />
        )}

        <StyledDiv>
          <StyledText>{movie.title}</StyledText>
          <StyledRaiting>{movie.vote_average}</StyledRaiting>
        </StyledDiv>
      </Link>
    </StyledItem>
  );
};

export default GalleryItem;

GalleryItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};
