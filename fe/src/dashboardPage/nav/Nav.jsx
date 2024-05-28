import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import useUserDetails from '../../shared/hooks/useUserDetails.js';
import { logout } from '../../shared/utils/logout.js';
function NavLogo() {
  return (
    <div>
      <img
        className="nav-logo-container"
        width="100%"
        height="100%"
        src="/logoPlaceholder.svg"
        alt=""
      />
    </div>
  );
}

function NavButton({ text, onClickHandler }) {
  return (
    <span className="nav-button" onClick={onClickHandler}>
      {text}
    </span>
  );
}
NavButton.propTypes = {
  onClickHandler: PropTypes.any,
  text: PropTypes.any,
};

export default function Nav() {
  const { isLogged } = useUserDetails();

  const navigate = useNavigate();

  function handleNavigateToAuth() {
    navigate('/auth');
  }

  function handleNavigateToSettings() {
    navigate('/settings');
  }

  function handleNavigateToChannels() {
    navigate('/channels');
  }

  function handleLogout() {
    logout();
  }

  return (
    <div className="nav-container">
      <NavLogo></NavLogo>
      <div className="nav-buttons-container">
        <NavButton
          text="Browse"
          onClickHandler={handleNavigateToChannels}
        ></NavButton>
        {!isLogged ? (
          <NavButton
            text="Login"
            onClickHandler={handleNavigateToAuth}
          ></NavButton>
        ) : (
          <div className="">
            <NavButton
              text="My Account"
              onClickHandler={handleNavigateToSettings}
            ></NavButton>
            <NavButton text="Logout" onClickHandler={handleLogout}></NavButton>
          </div>
        )}
      </div>
    </div>
  );
}
