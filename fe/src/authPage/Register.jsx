import PropTypes from 'prop-types';
import { useState } from 'react';

import Logo from './Logo';
import AuthInput from './AuthInput';
import {
  emailValidationMessage,
  validateEmail,
} from '../shared/validators/validateEmail';

import {
  passwordValidationMessage,
  validatePassword,
} from '../shared/validators/validatePassword';
import {
  usernameValidationMessage,
  validateUsername,
} from '../shared/validators/validateUsername';
import {
  passwordConfValidationMessage,
  validatePasswordConfig,
} from '../shared/validators/validatePasswordConf';
import { useRegister } from '../shared/hooks/userRegister';

export function Register({ switchAuthHandler }) {
  const { isLoading, register } = useRegister();

  const [formState, formStateSet] = useState({
    email: { value: '', isValid: false, showError: false },
    password: { value: '', isValid: false, showError: false },
    username: { value: '', isValid: false, showError: false },
    passwordConf: { value: '', isValid: false, showError: false },
  });

  function handleInputValueChange(value, field) {
    try {
      formStateSet((prevState) => ({
        ...prevState,
        [field]: { ...prevState[field], value },
      }));
      return;
    } catch (error) {
      console.log(error.message);
    }
  }
  function handleInputValidationOnBlur(value, field) {
    try {
      let isValid = false;

      switch (field) {
        case 'email':
          isValid = validateEmail(value);
          break;
        case 'password':
          isValid = validatePassword(value);
          break;
        case 'username':
          isValid = validateUsername(value);
          break;
        case 'passwordConf':
          isValid = validatePasswordConfig(formState.password.value, value);
          break;
        default:
          break;
      }
      formStateSet((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          isValid,
          showError: !isValid,
        },
      }));
      return;
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleRegister(e) {
    try {
      e.preventDefault();
      register(
        formState.email.value,
        formState.password.value,
        formState.username.value,
      );
      return;
    } catch (error) {
      console.log(error.message);
    }
  }
  console.log(formState);
  return (
    <div className="register-container">
      <Logo text="Sign up to Clone" />
      <form action="" className="auth-form">
        <AuthInput
          field="email"
          label="Email"
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage}
        ></AuthInput>
        <AuthInput
          field="username"
          label="Username"
          value={formState.username.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.username.showError}
          validationMessage={usernameValidationMessage}
        ></AuthInput>
        <AuthInput
          field="password"
          label="Password"
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type="password"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.password.showError}
          validationMessage={passwordValidationMessage}
        ></AuthInput>
        <AuthInput
          field="passwordConf"
          label="password"
          value={formState.passwordConf.value}
          onChangeHandler={handleInputValueChange}
          type="password"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.passwordConf.showError}
          validationMessage={passwordConfValidationMessage}
        ></AuthInput>
        <button onClick={handleRegister} disabled={isLoading}>
          Register
        </button>
      </form>
      <span className="auth-form-switch-label" onClick={switchAuthHandler}>
        Already have an account? Sign in
      </span>
    </div>
  );
}

Register.propTypes = {
  switchAuthHandler: PropTypes.any,
};
