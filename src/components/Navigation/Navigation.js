import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import Phonebook from 'Pages/Phonebook/Phonebook';
import { Li, Link, Nav, Ul } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      <Ul>
        <Li>
          <Link to="/" end>
            Home
          </Link>
        </Li>
        <Li>
          {isLoggedIn && (
            <Link to="/phonebook" element={<Phonebook />}>
              Phonebook
            </Link>
          )}
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navigation;
