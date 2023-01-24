import { GoSearch } from 'react-icons/go';
import PropTypes from 'prop-types';

import {
  Wrapper,
  SearchForm,
  SearchBtn,
  SearchInput,
} from './SearchBar.styled';

export const Searchbar = ({ value, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.elements.search.value);
    e.target.elements.search.value = '';
  };
  return (
    <Wrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchBtn>
          <GoSearch />
        </SearchBtn>

        <SearchInput
          name="search"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </SearchForm>
    </Wrapper>
  );
};

Searchbar.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
};
