import { Button, Form, Input, Label } from 'components/RegisterForm/RegisterForm.styled';
import Section from 'components/Section/Section';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </Section>
  );
};

export default LoginForm;
