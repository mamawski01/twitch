export function validatePassword(password) {
  try {
    const regex = /^\S{6,12}$/;
    return regex.test(password);
  } catch (error) {
    console.log(error.message);
  }
}

export const passwordValidationMessage =
  'Password must be between 6 and 12 characters long. No spaces allowed.';
