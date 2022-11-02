import api from './api';

export async function signUp(email: string, password: string) {
  const response = await api.post('/signup', {
    email,
    password,
    confirmPassword: password,
  });
  return response.data;
}
