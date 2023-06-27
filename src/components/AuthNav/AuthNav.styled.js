import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.div`
  display: flex;
  gap: 14px;
  margin-left: 10px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 28px;
  font-weight: 600;
  color: yellow;
  cursor: pointer;
  &.active {
    color: #7a3b2e;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;
