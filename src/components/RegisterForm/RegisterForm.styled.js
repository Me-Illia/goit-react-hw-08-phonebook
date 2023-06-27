import styled from "styled-components";


export const Form = styled.form`
  width: 300px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 10px;
  background-color: white;
  border: 2px solid cornflowerblue;
  border-radius: 12px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  height: 20px;
`;

export const Button = styled.button`
  padding: 4px 8px;
  display: inline-block;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  border: 2px solid cornflowerblue;
  border-radius: 12px;
  :hover {
    background-color: cornflowerblue;
  }
`;
