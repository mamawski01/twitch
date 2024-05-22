export function validatePasswordConfig(pass, passConf) {
  try {
    return pass === passConf;
  } catch (error) {
    console.log(error.message);
  }
}

export const passwordConfValidationMessage = 'Passwords do not match.';
