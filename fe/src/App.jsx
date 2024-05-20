import PropTypes from 'prop-types';

export function App({ children }) {
  return <>{children}</>;
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};
