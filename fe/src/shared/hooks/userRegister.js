import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register as registerRequest } from '../../api/api';
import toast from 'react-hot-toast';

export function useRegister() {
  const navigate = useNavigate();
  const [isLoading, isLoadingSet] = useState(false);

  async function register(email, password, username) {
    isLoadingSet(true);
    const res = await registerRequest({
      email,
      password,
      username,
    });
    isLoadingSet(false);
    if (res.error) {
      return toast.error(
        res.exception?.response?.data ||
          'Error occured while registering in. Please try again.',
      );
    }
    const { userDetails } = res.data;

    localStorage.setItem('user', JSON.stringify(userDetails));
    navigate('/');
  }
  return { register, isLoading };
}
