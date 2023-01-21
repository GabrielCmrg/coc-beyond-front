import api from './api';

import { userView } from '../types/userTypes';

// remember to change the signupArguments type on user types when changing this
// function arguments
export async function signup(
  email: string,
  password: string,
  confirmPassword: string,
): Promise<userView> {
  const response = await api.post('/signup', {
    email,
    password,
    confirmPassword,
  });
  return response.data;
}
