import api from './api';

export async function signup(
  email: string,
  password: string,
  confirmPassword: string,
) {
  const response = await api.post('/signup', {
    email,
    password,
    confirmPassword,
  });
  return response.data;
}
