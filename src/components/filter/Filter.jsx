import { useDispatch } from 'react-redux';
import { handleFilterChange } from 'redux/contacts/contacts-actions';

import PropTypes from 'prop-types';
import s from './Filter.module.css';

export const Filter = ({ filterValue }) => {
  const dispatch = useDispatch();

  const gethandleFilterChange = ({ currentTarget }) => {
    const { value } = currentTarget;
    dispatch(handleFilterChange(value));
  };

  const getBlur = () => {
    setTimeout(() => {
      dispatch(handleFilterChange(''));
    }, 500);
  };

  return (
    <input
      className={s.Input}
      type="text"
      value={filterValue}
      onChange={gethandleFilterChange}
      onBlur={getBlur}
      placeholder="Find contacts by name"
    />
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
};
