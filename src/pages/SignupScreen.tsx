import { useState } from 'react';

import PageContainer from '../components/styles/PageContainer';
import SideImage from '../components/styles/SideImage';
import SideForm from '../components/styles/SideForm';
import Form from '../components/styles/Form';
import Logo from '../components/Logo';

import image from '../assets/cthulhu_wants_you.jpeg';

function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Join us!</button>
        </Form>
      </SideForm>
    </PageContainer>
  );
}

export default SignupScreen;
