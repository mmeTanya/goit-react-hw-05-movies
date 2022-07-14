import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchReviews } from '../../services/api';
import {
  StyledSection,
  StyledList,
  StyledItem,
  StyledTittle,
  StyledText,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const GetReviews = async () => {
      try {
        const result = await FetchReviews(movieId);
        console.log(result);
        setReviews(result.results);
      } catch (error) {
        console.log(error);
      }
    };
    GetReviews();
  }, [movieId]);

  return (
    <StyledSection>
      {reviews.length !== 0 ? (
        <StyledList>
          {reviews.map(review => (
            <StyledItem key={review.id}>
              <StyledTittle>Author: {review.author}</StyledTittle>
              <StyledText>{review.content}</StyledText>
            </StyledItem>
          ))}
        </StyledList>
      ) : (
        <StyledText>Sorry, we don't find reviews</StyledText>
      )}
    </StyledSection>
  );
};

export default Reviews;
