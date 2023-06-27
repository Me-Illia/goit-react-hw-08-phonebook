import { useState } from 'react';
import Section from 'components/Section/Section';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Button, Form, Input, Label } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Username
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" value={email} onChange={handleChange} />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" value={password} onChange={handleChange} />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </Section>
  );
};

export default RegisterForm;
