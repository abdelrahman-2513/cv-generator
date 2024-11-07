import "./Regitser.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Regitser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function HandleRegitserForm(e) {
    e.preventDefault();
    //console.log(email, password);
    if (email.length > 0 && password.length > 0) {
      toast.loading("Logging in...", { id: 1 });
      setTimeout(() => {
        navigate("/");
      });
    } else {
      toast.error("Please Enter Valid Email or Password!");
    }
  }
  return (
    <div className="Regitser-page" onContextMenu={(e) => e.preventDefault()}>
      <div className="image-container"></div>
      <div className="Regitser-form">
        <div className="form-title">
          <div className="logo">
            <img src="/logo.png" alt="CV-Logo" />
          </div>
        </div>
        <form>
          <h3>Welcome Back!</h3>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="name@sky.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="*************"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="link">
            <a href="/ResetPassword">Forgot Password?</a>
          </div>

          <button
            onClick={(e) => HandleRegitserForm(e)}
            className="btn btn-primary Regitser-btn"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Regitser;
