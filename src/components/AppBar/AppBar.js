import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Div, Header } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Div>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Div>
    </Header>
  );
};

export default AppBar;
