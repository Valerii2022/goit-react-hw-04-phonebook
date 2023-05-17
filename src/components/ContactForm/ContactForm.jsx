import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, AddContactBtn, FormLabel, FormInput } from './styled';

export const ContactForm = handleAddContacts => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameInput = e => {
    setName(e.currentTarget.value);
  };

  const handleNumberInput = e => {
    setNumber(e.currentTarget.value);
  };

  const addContacts = e => {
    console.log(handleAddContacts);
    e.preventDefault();
    // handleAddContacts(name, number);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={addContacts}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleNameInput}
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleNumberInput}
          required
        />
      </FormLabel>
      <AddContactBtn>Add contacts</AddContactBtn>
    </Form>
  );
};

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleNameInput = e => {
//     this.setState({ name: e.currentTarget.value });
//   };

//   handleNumberInput = e => {
//     this.setState({ number: e.currentTarget.value });
//   };

//   addContacts = e => {
//     e.preventDefault();
//     this.props.handleAddContacts(this.state.name, this.state.number);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <Form onSubmit={this.addContacts}>
//         <FormLabel>
//           Name
//           <FormInput
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             value={this.state.name}
//             onChange={this.handleNameInput}
//             required
//           />
//         </FormLabel>
//         <FormLabel>
//           Number
//           <FormInput
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             value={this.state.number}
//             onChange={this.handleNumberInput}
//             required
//           />
//         </FormLabel>
//         <AddContactBtn>Add contacts</AddContactBtn>
//       </Form>
//     );
//   }
// }

ContactForm.propTypes = {
  handleAddContacts: PropTypes.func.isRequired,
};
