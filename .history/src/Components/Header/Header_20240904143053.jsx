import CloseIcon from "./CloseIcon";
import "./Header.css";

// ----------------------------------------- Components -----------------------------------------------------------
import HeaderIcons from "./HeaderIcons";
import SearchContainer from "./SearchContainer";

function Header() {
  return (
    <header className="header-container">
      <div className="logo day-logo gb_hd">
        <a href="/" className="day-link">
          <img
            className="day-logo"
            src="/images/logo.png"
            alt="Sky-Culiniare"
          />
        </a>
        <a href="/" className="night-link">
          <img
            className="night-logo"
            src="/images/logo-dark.png"
            alt="Sky-Culiniare"
          />
        </a>
      </div>
      <SearchContainer />

      <CloseIcon />
      <HeaderIcons />
    </header>
  );
}

export default Header;
