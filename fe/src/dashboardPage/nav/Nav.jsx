function NavLogo() {
  return (
    <div>
      <img
        className="nav-logo"
        width="100%"
        height="100%"
        src="/logoPlaceholder.svg"
        alt=""
      />
    </div>
  );
}

export default function Nav() {
  return (
    <div className="nav-container">
      <NavLogo></NavLogo>
    </div>
  );
}
