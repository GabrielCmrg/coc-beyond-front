import useAsync from 'src/hooks/useAsync';

import * as userApi from 'src/services/userApi';

import { UserCreationPost, UserView } from 'src/types/userTypes';

export default function useSignup(state: UserCreationPost) {
  const {
    data: user,
    loading: signupLoading,
    error: signupError,
    execute: signup,
  } = useAsync<UserView>(() => userApi.signup(state));

  return {
    user,
    signupLoading,
    signupError,
    signup,
  };
}
