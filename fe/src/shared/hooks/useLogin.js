import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { login as loginRequest } from '../../api/api';

export function useLogin() {
  const navigate = useNavigate();
  const [isLoading, isLoadingSet] = useState(false);

  async function login(email, password) {
    isLoadingSet(true);
    const res = await loginRequest({
      email,
      password,
    });
    isLoadingSet(false);
    if (res.error) {
      console.log(res.exception.response.data);
      return toast.error(
        res.exception?.response?.data ||
          'Error occured while logging in. Please try again.',
      );
    }
    const { userDetails } = res.data;
    console.log(userDetails);

    localStorage.setItem('user', JSON.stringify(userDetails));
    navigate('/channels');
  }
  return { login, isLoading };
}
