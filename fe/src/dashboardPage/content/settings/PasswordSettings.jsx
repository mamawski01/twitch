import { useState } from 'react';

import {
  passwordValidationMessage,
  validatePassword,
} from '../../../shared/validators/validatePassword.js';
import Input from '../../../shared/components/Input.jsx';
import { useChangePassword } from '../../../shared/hooks/useChangePassword.js';

const inputs = [
  {
    field: 'password',
    label: 'Password',
    validationMessage: passwordValidationMessage,
    type: 'password',
  },
  {
    field: 'newPassword',
    label: 'New password',
    validationMessage: passwordValidationMessage,
    type: 'password',
  },
];

export default function PasswordSettings() {
  const [formState, formStateSet] = useState({
    password: { value: '', isValid: false, showError: false },
    newPassword: { value: '', isValid: false, showError: false },
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

  const { changePassword } = useChangePassword();

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = validatePassword(value);

    formStateSet((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
    return;
  };

  const isSubmitButtonDisable =
    !formState.password.isValid || !formState.newPassword.isValid;

  function handleFormSubmit(e) {
    e.preventDefault();

    changePassword(formState.password.value, formState.newPassword.value);
  }

  return (
    <form className="settings-form">
      {inputs.map((input) => (
        <Input
          key={input.field}
          field={input.field}
          label={input.label}
          value={formState[input.field].value}
          onBlurHandler={handleInputValidationOnBlur}
          onChangeHandler={handleInputValueChange}
          showErrorMessage={formState[input.field].showError}
          validationMessage={input.validationMessage}
          type={input.type}
        ></Input>
      ))}
      <button disabled={isSubmitButtonDisable} onClick={handleFormSubmit}>
        Save changes
      </button>
    </form>
  );
}
