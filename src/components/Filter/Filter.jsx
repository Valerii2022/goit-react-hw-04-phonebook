import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FindLabel, FindInput, Form } from './styled';

export class Filter extends Component {
  render() {
    return (
      <Form>
        <FindLabel>
          Find contacts by name
          <FindInput
            type="text"
            name="searchName"
            value={this.props.filter}
            onChange={this.props.findName}
          />
        </FindLabel>
      </Form>
    );
  }
}

Filter.protoType = {
  filter: PropTypes.string.isRequired,
  findName: PropTypes.func.isRequired,
};
