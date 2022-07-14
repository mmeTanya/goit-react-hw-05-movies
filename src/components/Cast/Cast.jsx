import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchCast } from '../../services/api';
import {
  StyledSection,
  StyledList,
  StyledItem,
  StyledImage,
  StyledTittle,
  StyledText,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const GetCast = async () => {
      try {
        const result = await FetchCast(movieId);
        console.log(result);
        setCast(result.cast);
      } catch (error) {
        console.log(error);
      }
    };
    GetCast();
  }, [movieId]);

  console.log(cast);

  return (
    <StyledSection>
      {cast.length !== 0 && (
        <StyledList>
          {cast.map(actor => (
            <StyledItem key={actor.id}>
              {actor.profile_path ? (
                <StyledImage
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <StyledImage
                  src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                  alt={actor.name}
                />
              )}
              <StyledTittle>{actor.name}</StyledTittle>
              <StyledText>Character: {actor.character}</StyledText>
            </StyledItem>
          ))}
        </StyledList>
      )}
    </StyledSection>
  );
};

export default Cast;
