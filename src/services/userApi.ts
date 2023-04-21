import api from './api';

import { UserCreationPost, UserView } from 'src/types/userTypes';

export async function signup(postBody: UserCreationPost): Promise<UserView> {
  const response = await api.post('/signup', postBody);
  return response.data;
}
