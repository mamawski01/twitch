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
  textarea,
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
      {textarea ? (
        <textarea
          type={type}
          value={value}
          onChange={handleValueChange}
          onBlur={handleInputBlur}
          rows={5}
          style={{ maxWidth: '400px' }}
        ></textarea>
      ) : (
        <input
          type={type}
          value={value}
          onChange={handleValueChange}
          onBlur={handleInputBlur}
        />
      )}
      <span className="auth-form-validation-message">
        {showErrorMessage && validationMessage}
      </span>
    </>
  );
}

Input.propTypes = {
  field: PropTypes.any,
  label: PropTypes.any,
  onBlurHandler: PropTypes.func,
  onChangeHandler: PropTypes.func,
  showErrorMessage: PropTypes.any,
  textarea: PropTypes.any,
  type: PropTypes.any,
  validationMessage: PropTypes.any,
  value: PropTypes.any,
};
