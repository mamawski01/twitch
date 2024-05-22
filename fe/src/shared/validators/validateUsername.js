export function validateUsername(username) {
  try {
    const regex = /^\S{3,8}$/;
    return regex.test(username);
  } catch (error) {
    console.log(error.message);
  }
}

export const usernameValidationMessage =
  'Username must be between 3 and 8 characters long. No spaces allowed.';
