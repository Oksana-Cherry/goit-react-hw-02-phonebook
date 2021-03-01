import PropTypes from 'prop-types';
const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={target => onChange(target.value)}
      placeholder="Enter name form Search"
    />
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
export default Filter;
