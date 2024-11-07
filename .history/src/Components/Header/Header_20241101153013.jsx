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
          <img className="day-logo" src="/logo.png" alt="CV-Generator" />
        </a>
      </div>
      <div>
        <button className="btn">Logout</button>
      </div>
    </header>
  );
}

export default Header;
