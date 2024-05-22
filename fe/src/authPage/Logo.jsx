import PropTypes from 'prop-types';

export default function Logo({ text }) {
  return (
    <div className="auth-form-logo-container">
      <img src="/logoPlaceholder.svg" alt="" />
      <span>&nbsp;{text}</span>
    </div>
  );
}

Logo.propTypes = {
  text: PropTypes.any,
};
