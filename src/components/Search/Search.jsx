// import PropTypes from 'prop-types';

import { SearchLabel, SearchInput } from './Search.styled';

export const Search = ({ searchLabel, value, onChange }) => {
  return (
    <SearchLabel>
      {searchLabel}
      <SearchInput
        name="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </SearchLabel>
  );
};
