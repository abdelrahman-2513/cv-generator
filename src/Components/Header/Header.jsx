import { Link } from "react-router-dom";
import useAuthStore from "../../assets/Zustand/Auth/UserAuth";
import "./Header.css";

function Header() {
  const { logout,user } = useAuthStore((state) => state);
  const HandleLogout = () => {
    logout();
  };
  return (
    <header className="header-container">
      <div className="header-logo day-logo gb_hd">
        <a href="/" className="day-link">
          <img className="day-logo" src="/logo.png" alt="CV-Generator" />
        </a>
      </div>
      <div className="links">
          <Link to={"/"}>Home</Link>
          <Link to={"/my-cvs"}>My Cvs</Link>
      </div>
      <div>
        {user?<button className="btn header-btn" onClick={HandleLogout}>
          Logout
        </button>:
        <div className="btns">
          <button className="btn header-btn">Login</button>
        </div>
        }
      </div>
    </header>
  );
}

export default Header;
