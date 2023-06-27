import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  font-size: 40px;
  gap: 24px;
`;

export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 30px;
`;
export const Li = styled.li`
  color: #000;
  font-size: 25px;
  list-style: none;
  padding: 13px;
`;


export const Link = styled(NavLink)`
  text-decoration: none;
  color: cornflowerblue;
  text-transform: uppercase;
  font-weight: 500;
  &.active {
    color: #7a3b2e;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;
