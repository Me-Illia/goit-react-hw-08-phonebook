import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
`;
export const UserTitle = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: yellow;
`;
export const Button = styled.button`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  padding: 5px 10px;
  background-color: cornflowerblue;
  border-radius: 26px;
  border: 1px solid yellow;
  color: yellow;
  box-shadow: 0px 2px 2px #5c5696;
  transition: 0.2s;
  &:hover,
  &:focus {
    border-color: #6a679e;
    outline: none;
    color: #5c5696;
  }
  @media (min-width: 1200px) {
    padding: 6px 8px;
    font-size: 12px;
  }
`;
