import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from 'components/container';
import { Section } from 'components/section';
import { Contacts } from 'components/contacts';
import { ContactForm } from 'components/contactForm/ContactForm';
import { Filter } from 'components/filter/Filter';
import { ContactList } from 'components/contactList/ContactList';

import {
  fetchContacts,
  createContact,
} from 'redux/contacts/contacts-operations';
import { getItems, getFilter } from 'redux/contacts/contacts-selectors';

export const Phonebook = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContactSubmit = newContact => {
    if (contacts.find(contact => newContact.name === contact.name))
      alert(`${newContact.name} is already in contacts`);
    else if (contacts.find(contact => newContact.number === contact.number))
      alert(` this number ${newContact.number} is already in contacts`);
    else dispatch(createContact(newContact));
  };

  return (
    <Container title="Phonebook">
      <Section>
        <ContactForm onAddContact={addContactSubmit} />
      </Section>
      <Section>
        <Contacts title="Contacts">
          {contacts.length > 1 && <Filter filterValue={filter} />}
          {contacts.length > 0 ? (
            <ContactList />
          ) : (
            'There are no contacts in the phone book. Please add a contact'
          )}
        </Contacts>
      </Section>
    </Container>
  );
};
