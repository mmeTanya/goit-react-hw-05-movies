import {
  StyledSection,
  StyledImage,
  StyledMainTittle,
  StyledTittle,
  StyledText,
} from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  return (
    <StyledSection>
      {movie.poster_path && (
        <StyledImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <div>
        <StyledMainTittle>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </StyledMainTittle>
        <StyledText>User Score: {movie.vote_average * 10}%</StyledText>
        <StyledTittle>Overwiew</StyledTittle>
        <StyledText>{movie.overview}</StyledText>
        <StyledTittle>Genres</StyledTittle>
        <StyledText>
          {movie.genres.map(genre => genre.name).join(', ')}
        </StyledText>
      </div>
    </StyledSection>
  );
};

export default MovieCard;
