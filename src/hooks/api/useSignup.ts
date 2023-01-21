import useAsync from '../useAsync';

import * as userApi from '../../services/userApi';

import { userView, signupArguments } from '../../types/userTypes';

export default function useSignup() {
  const {
    data: user,
    loading: signupLoading,
    error: signupError,
    act: signup,
  } = useAsync<userView, signupArguments>(userApi.signup);

  return {
    user,
    signupLoading,
    signupError,
    signup,
  };
}
