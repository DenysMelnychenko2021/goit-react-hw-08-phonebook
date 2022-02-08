import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import { ContactsItem } from 'components/contactsItem';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { getContactOnFilter } from 'redux/contacts/contacts-selectors';

export const ContactList = () => {
  const contacts = useSelector(getContactOnFilter);
  const dispatch = useDispatch();

  return (
    <ul className={s.List}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.Item} key={id}>
          <ContactsItem
            name={name}
            number={number}
            onDelete={() => dispatch(deleteContact(id))}
          />
        </li>
      ))}
    </ul>
  );
};
