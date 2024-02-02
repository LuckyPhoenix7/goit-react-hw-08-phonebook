import React from 'react';
import { StyledInput, StyledLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <StyledLabel htmlFor="filter">
      Find contact by Name
      <StyledInput
        value={filter}
        onChange={evt => dispatch(setFilter(evt.target.value))}
      />
    </StyledLabel>
  );
};
