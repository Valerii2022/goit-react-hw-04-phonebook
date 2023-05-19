import PropTypes from 'prop-types';
import { FindLabel, FindInput, Form } from './styled';

export const Filter = ({ filter, findName }) => {
  return (
    <Form>
      <FindLabel>
        Find contacts by name
        <FindInput
          type="text"
          name="searchName"
          value={filter}
          onChange={findName}
        />
      </FindLabel>
    </Form>
  );
};

Filter.propType = {
  filter: PropTypes.string.isRequired,
  findName: PropTypes.func.isRequired,
};
