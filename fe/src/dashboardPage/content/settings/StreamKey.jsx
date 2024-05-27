import PropTypes from 'prop-types';
export default function StreamKey({ streamKey }) {
  return (
    <div className="settings-stream-key-container">
      <span>{streamKey}</span>
    </div>
  );
}

StreamKey.propTypes = {
  streamKey: PropTypes.any,
};
