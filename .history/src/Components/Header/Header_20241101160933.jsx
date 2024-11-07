import "./Header.css";

function Header() {
  const { logout } = useAuthStore((state) => state);
  const HandleLogout = () => {
    logout();
  };
  return (
    <header className="header-container">
      <div className="logo day-logo gb_hd">
        <a href="/" className="day-link">
          <img className="day-logo" src="/logo.png" alt="CV-Generator" />
        </a>
      </div>
      <div>
        <button className="btn header-btn" onClick={HandleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
