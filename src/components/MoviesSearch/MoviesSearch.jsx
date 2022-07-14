import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledButton,
  StyledInput,
  StyledIcon,
} from './MoviesSearch.styled';

const MoviesSearch = ({ onSubmited }) => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
    setSearchParams({ name: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast('You do not enter a query !');
      return;
    }
    onSubmited(query);
    reset();
  };

  const reset = () => {
    setQuery('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledButton type="submit">
        <StyledIcon />
      </StyledButton>

      <StyledInput
        type="text"
        name=" query"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={query}
        onChange={handleChange}
      />
    </StyledForm>
  );
};

MoviesSearch.propTypes = {
  onSubmited: PropTypes.func.isRequired,
};

export default MoviesSearch;
