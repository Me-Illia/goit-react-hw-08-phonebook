import PropTypes from 'prop-types';
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default ContactList;
