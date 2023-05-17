import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleFindNameInput = e => {
    setFilter(e.currentTarget.value);
  };

  const handleAddContacts = (contactName, contactNumber) => {
    const addedName = contacts.some(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );

    if (addedName) {
      return alert(`${contactName} is already in contacts`);
    }

    const id = nanoid(10);
    setContacts([
      ...contacts,
      { name: contactName, id: id, number: contactNumber },
    ]);
  };

  const handleContactsDelete = e => {
    const names = contacts.filter(contact => contact.id !== e.currentTarget.id);
    setContacts([...names]);
  };

  const renderNames = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleAddContacts={handleAddContacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} findName={handleFindNameInput} />
      <ContactList
        contacts={renderNames}
        handleContactsDelete={handleContactsDelete}
      />
    </>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const currentContacts = localStorage.getItem('contacts');
//     const contacts = JSON.parse(currentContacts);
//     if (contacts) {
//       this.setState({ contacts });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   handleFindNameInput = e => {
//     this.setState({
//       filter: e.currentTarget.value,
//     });
//   };

//   handleAddContacts = (contactName, contactNumber) => {
//     const addedName = this.state.contacts.some(
//       contact => contact.name.toLowerCase() === contactName.toLowerCase()
//     );

//     if (addedName) {
//       return alert(`${contactName} is already in contacts`);
//     }

//     const id = nanoid(10);
//     this.setState({
//       contacts: [
//         ...this.state.contacts,
//         { name: contactName, id: id, number: contactNumber },
//       ],
//     });
//   };

//   handleContactsDelete = e => {
//     const names = this.state.contacts.filter(
//       contact => contact.id !== e.currentTarget.id
//     );

//     this.setState({
//       contacts: [...names],
//     });
//   };

//   render() {
//     const renderNames = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//     return (
//       <>
//         <h1>Phonebook</h1>
//         <ContactForm handleAddContacts={this.handleAddContacts} />
//         <h2>Contacts</h2>
//         <Filter
//           filter={this.state.filter}
//           findName={this.handleFindNameInput}
//         />
//         <ContactList
//           contacts={renderNames}
//           handleContactsDelete={this.handleContactsDelete}
//         />
//       </>
//     );
//   }
// }
