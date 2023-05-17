import React, { Component } from 'react';
import { List, ListItem, Name, DeleteBtn, PhoneNumber } from './styled';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    const { contacts, handleContactsDelete } = this.props;
    return (
      <List>
        {contacts.map(({ name, id, number }) => {
          return (
            <ListItem key={id}>
              <Name>
                {name}: <PhoneNumber>{number}</PhoneNumber>
              </Name>
              <DeleteBtn id={id} onClick={handleContactsDelete}>
                Delete
              </DeleteBtn>
            </ListItem>
          );
        })}
      </List>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleContactsDelete: PropTypes.func.isRequired,
};
