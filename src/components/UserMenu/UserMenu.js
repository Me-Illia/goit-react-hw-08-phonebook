import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { Button, Div, UserTitle } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Div>
      <UserTitle>Welcome, {user.name} </UserTitle>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Div>
  );
};

export default UserMenu;
