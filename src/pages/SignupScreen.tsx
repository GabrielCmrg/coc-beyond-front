import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageContainer from '../components/styles/PageContainer';
import SideImage from '../components/styles/SideImage';
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

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signup(email, password);
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
    <PageContainer>
      <SideImage src={image} alt="Cthulhu wants YOU" />
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
    </PageContainer>
  );
}

export default SignupScreen;
