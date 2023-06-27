import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectFilter } from '../../redux/selectors';
import { List } from './ContactList.styled';
import ContactListItem from '../ContactList/ContactItem';
import Notification from '../Notifications/Notifications';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectFilter);

    const showMessage = contacts.length === 0 && filter;

  return (
    <div>
      {showMessage && <Notification message="There is no contacts" />}
      {contacts.length > 0 && (
        <List>
          {contacts.map((contact, id) => (
            <ContactListItem key={id} contact={contact} />
          ))}
        </List>
      )}
    </div>
  );
};


export default ContactList;
