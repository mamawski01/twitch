import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  descriptionValidationMessage,
  validateDescription,
} from '../../../shared/validators/validateDescription.js';
import {
  titleValidationMessage,
  validateTitle,
} from '../../../shared/validators/validateTitle.js';
import {
  usernameValidationMessage,
  validateUsername,
} from '../../../shared/validators/validateUsername.js';
import {
  avatarUrlValidationMessage,
  validateAvatarUrl,
} from '../../../shared/validators/validateAvatarUrl.js';
import Input from '../../../shared/components/Input.jsx';

const inputs = [
  {
    field: 'username',
    label: 'Username',
    validationMessage: usernameValidationMessage,
    type: 'text',
  },
  {
    field: 'title',
    label: 'Title',
    validationMessage: titleValidationMessage,
    type: 'text',
  },
  {
    field: 'avatarUrl',
    label: 'AvatarUrl',
    validationMessage: avatarUrlValidationMessage,
    type: 'text',
  },
  {
    field: 'description',
    label: 'Description',
    validationMessage: descriptionValidationMessage,
    type: 'text',
    textarea: true,
  },
];

export default function ChannelSettings({ settings, saveSettings }) {
  const [formState, formStateSet] = useState({
    title: {
      isValid: validateTitle(settings.title),
      showError: false,
      value: settings.title,
    },
    username: {
      isValid: validateUsername(settings.username),
      showError: false,
      value: settings.username,
    },
    avatarUrl: {
      isValid: validateAvatarUrl(settings.avatarUrl),
      showError: false,
      value: settings.avatarUrl,
    },
    description: {
      isValid: validateDescription(settings.description),
      showError: false,
      value: settings.description,
    },
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
        case 'username':
          isValid = validateUsername(value);
          break;
        case 'avatarUrl':
          isValid = validateAvatarUrl(value);
          break;
        case 'title':
          isValid = validateTitle(value);
          break;
        case 'description':
          isValid = validateDescription(value);
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

  function handleFormSubmit(e) {
    e.preventDefault();

    saveSettings({
      username: formState.username.value,
      title: formState.title.value,
      description: formState.description.value,
      avatarUrl: formState.avatarUrl.value,
    });
  }

  const isSubmitButtonDisabled =
    !formState.username.isValid ||
    !formState.title.isValid ||
    !formState.description.isValid ||
    !formState.avatarUrl.isValid;
  return (
    <form className="settings-form">
      {inputs.map((input) => (
        <Input
          key={input.field}
          field={input.field}
          label={input.label}
          value={formState[input.field].value}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState[input.field].showError}
          validationMessage={input.validationMessage}
          type={input.type}
          textarea={input.textarea}
        ></Input>
      ))}
      <button onClick={handleFormSubmit} disabled={isSubmitButtonDisabled}>
        Save Changes
      </button>
    </form>
  );
}

ChannelSettings.propTypes = {
  settings: PropTypes.shape({
    avatarUrl: PropTypes.any,
    description: PropTypes.any,
    title: PropTypes.any,
    username: PropTypes.any,
  }),
};
