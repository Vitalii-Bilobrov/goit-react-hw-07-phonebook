import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'Redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <>
      <label>Find contact by name</label>
      <input
        onChange={handleChange}
        value={filter}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.func,
};
