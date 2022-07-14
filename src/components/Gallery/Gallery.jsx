import PropTypes from 'prop-types';
import GalleryItem from '../GalleryItem';
import { StyledList } from './Gallery.styled';

const Gallery = ({ movies }) => {
  return (
    <>
      <StyledList className="ImageGallery">
        {movies.map(movie => (
          <GalleryItem movie={movie} key={movie.id} />
        ))}
      </StyledList>
    </>
  );
};

Gallery.propTypes = {
  movies: PropTypes.array,
};

export default Gallery;
