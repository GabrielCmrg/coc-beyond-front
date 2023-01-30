import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, useMediaQuery, useTheme } from '@mui/material';

import SideForm from '../components/styles/SideForm';
import Form from '../components/styles/Form';
import Logo from '../components/Logo';

import useSignup from '../hooks/api/useSignup';

import image from '../assets/cthulhu_wants_you.jpeg';

function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { user, signupError, signup } = useSignup();
  const navigate = useNavigate();
  const theme = useTheme();
  const lessThanMedium = useMediaQuery(theme.breakpoints.down('md'));

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signup(email, password, confirmPassword);
  };

  useEffect(() => {
    if (user) {
      alert('Account created!');
      navigate('/');
    }

    if (signupError) {
      alert(signupError);
    }
  }, [user, signupError]);

  return (
    <Box display="flex" height="100%">
      <Box
        component="img"
        src={image}
        alt="Cthulhu wants YOU"
        height="100%"
        hidden={lessThanMedium}
      />
      <SideForm>
        <Logo />
        <Form onSubmit={handleSignup}>
          <input
            type="text"
            name="email"
            id="email"
            data-cy="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            data-cy="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            data-cy="confirm-password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" data-cy="create-account-button">
            Join us!
          </button>
        </Form>
      </SideForm>
    </Box>
  );
}

export default SignupScreen;
