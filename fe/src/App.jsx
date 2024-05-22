import PropTypes from 'prop-types';
import { Toaster } from 'react-hot-toast';

export function App({ children }) {
  return (
    <>
      {children}
      <Toaster position="bottom-right" reverseOrder={false}></Toaster>
    </>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};
