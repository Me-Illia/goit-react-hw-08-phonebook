import { useState } from 'react';
import { Button, Form, Input, Label } from 'components/RegisterForm/RegisterForm.styled';
import Section from 'components/Section/Section';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
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
          Email
          <Input type="email" name="email" value={email} onChange={handleChange} />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" value={password} onChange={handleChange} />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </Section>
  );
};

export default LoginForm;
