import PropTypes from 'prop-types';
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
  return (
    <div className="nav-container">
      <NavLogo></NavLogo>
      <div className="nav-buttons-container">
        <NavButton text="Browse" onClickHandler={() => {}}></NavButton>
        <NavButton text="Login" onClickHandler={() => {}}></NavButton>
        <div className="">
          <NavButton text="My Account" onClickHandler={() => {}}></NavButton>
          <NavButton text="Logout" onClickHandler={() => {}}></NavButton>
        </div>
      </div>
    </div>
  );
}
