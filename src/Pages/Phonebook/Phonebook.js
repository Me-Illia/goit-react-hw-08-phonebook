import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { fetchContacts } from 'redux/operations';
import { selectError, selectLoading } from 'redux/selectors';
import { Div } from './Phonebook.styled';

function Phonebook() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Div>
      {isLoggedIn ? (
        <>
          <Section title="Add contact in your phonebook">
            <ContactForm />
          </Section>
          <Section title="Your contacts">
            <Filter />
            {isLoading && !error && <Loader />}
            <ContactList />
          </Section>
        </>
      ) : (
        <p>Please, enter your account or register </p>
      )}
    </Div>
  );
}

export default Phonebook;
