import Register from 'Pages/Register';
import { Link, Nav } from './AuthNav.styled';


const AuthNav = () => {
  return (
    <Nav>
      <Link to="/register" element={<Register />}>
        Register
      </Link>
      <Link to="/login">LogIn</Link>
    </Nav>
  );
};

export default AuthNav;
