import api from './api';

export async function signup(email: string, password: string) {
  const response = await api.post('/signup', {
    email,
    password,
    confirmPassword: password,
  });
  return response.data;
}
