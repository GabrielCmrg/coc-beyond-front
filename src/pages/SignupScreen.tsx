import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from 'src/components/styles/Form';
import Logo from 'src/components/Logo';
import Layout from 'src/layouts/SideImageLayout';

import useSignup from 'src/hooks/api/useSignup';

import image from 'src/assets/cthulhu_wants_you.jpeg';

function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { user, signupError, signup } = useSignup({
    email,
    password,
    confirmPassword,
  });
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signup();
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
    <Layout image={image} alt="Cthulhu wants YOU">
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
    </Layout>
  );
}

export default SignupScreen;
