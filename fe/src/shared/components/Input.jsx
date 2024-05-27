import PropTypes from 'prop-types';
export default function Input({
  field,
  label,
  value,
  onChangeHandler,
  type,
  showErrorMessage,
  validationMessage,
  onBlurHandler,
}) {
  const handleValueChange = (e) => {
    try {
      onChangeHandler(e.target.value, field);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleInputBlur = (e) => {
    try {
      onBlurHandler(e.target.value, field);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="auth-form-label">
        <span>{label}</span>
      </div>
      <input
        type={type}
        value={value}
        onChange={handleValueChange}
        onBlur={handleInputBlur}
      />
      <span className="auth-form-validation-message">
        {showErrorMessage && validationMessage}
      </span>
    </>
  );
}

Input.propTypes = {
  field: PropTypes.any,
  label: PropTypes.any,
  onBlurHandler: PropTypes.any,
  onChangeHandler: PropTypes.any,
  showErrorMessage: PropTypes.any,
  type: PropTypes.any,
  validationMessage: PropTypes.any,
  value: PropTypes.any,
};
