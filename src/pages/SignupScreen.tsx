import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from 'src/components/styles/Form';
import Logo from 'src/components/Logo';

import { UserCreationPost } from 'src/types/userTypes';

import Layout from 'src/layouts/SideImageLayout';

import useSignup from 'src/hooks/api/useSignup';

import image from 'src/assets/cthulhu_wants_you.jpeg';

function SignupScreen() {
  const [userPost, setUserPost] = useState<UserCreationPost>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPost((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { user, signupError, signup } = useSignup(userPost);
  const navigate = useNavigate();

  if (user) {
    alert('Account created!');
    navigate('/');
  }

  if (signupError) {
    alert(signupError);
  }

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signup();
  };

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
          value={userPost.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          data-cy="password"
          placeholder="Password"
          value={userPost.password}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirm-password"
          data-cy="confirm-password"
          placeholder="Confirm password"
          value={userPost.confirmPassword}
          onChange={handleInputChange}
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
