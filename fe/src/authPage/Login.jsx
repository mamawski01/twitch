import PropTypes from 'prop-types';
import { useState } from 'react';

import Logo from './Logo';
import {
  emailValidationMessage,
  validateEmail,
} from '../shared/validators/validateEmail.js';

import {
  passwordValidationMessage,
  validatePassword,
} from '../shared/validators/validatePassword.js';
import { useLogin } from '../shared/hooks/useLogin.js';
import Input from '../shared/components/Input.jsx';

export function Login({ switchAuthHandler }) {
  const { login, isLoading } = useLogin();

  const [formState, formStateSet] = useState({
    email: { value: '', isValid: false, showError: false },
    password: { value: '', isValid: false, showError: false },
  });

  const handleInputValueChange = (value, field) => {
    try {
      formStateSet((prevState) => ({
        ...prevState,
        [field]: { ...prevState[field], value },
      }));
      return;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleInputValidationOnBlur = (value, field) => {
    try {
      let isValid = false;

      switch (field) {
        case 'email':
          isValid = validateEmail(value);
          break;
        case 'password':
          isValid = validatePassword(value);
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
  };

  function handleLogin(e) {
    try {
      e.preventDefault();
      login(formState.email.value, formState.password.value);
      return;
    } catch (error) {
      console.log(error.message);
    }
  }
  const isSubmitButtonDisabled =
    isLoading || !formState.password.isValid || !formState.email.isValid;
  return (
    <div className="login-container">
      <Logo text="Login to Clone" />
      <form action="" className="auth-form">
        <Input
          field="email"
          label="Email"
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage}
        ></Input>
        <Input
          field="password"
          label="Password"
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type="password"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.password.showError}
          validationMessage={passwordValidationMessage}
        ></Input>
        <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
          Log in
        </button>
      </form>
      <span className="auth-form-switch-label" onClick={switchAuthHandler}>
        Don&apos;t have an account? Sign up
      </span>
    </div>
  );
}

Login.propTypes = {
  switchAuthHandler: PropTypes.any,
};
