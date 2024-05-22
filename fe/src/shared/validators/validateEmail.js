export function validateEmail(email) {
  try {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  } catch (error) {
    console.log(error.message);
  }
}

export const emailValidationMessage = 'Please enter a valid email address.';
