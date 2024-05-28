import toast from 'react-hot-toast';
import { changePassword as changePasswordRequest } from '../../api/api';

export function useChangePassword() {
  async function changePassword(password, newPassword) {
    const responseData = await changePasswordRequest({
      password,
      newPassword,
    });

    if (responseData.error) {
      return toast.error(
        responseData.exception?.response?.data ||
          'Error occured while changing password.',
      );
    }
    toast.success('Password changed successfully.');
  }
  return { changePassword };
}
