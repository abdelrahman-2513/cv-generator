import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuthStore from "../../assets/Zustand/Auth/UserAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  function HandleLoginForm(e) {
    e.preventDefault();
    //console.log(email, password);
    if (email.length > 0 && password.length > 0) {
      toast.loading("Logging in...", { id: 1 });
      login({ email, password });
      setTimeout(() => {
        navigate("/");
        toast.dismiss(1);
      }, 3000);
    } else {
      toast.error("Please Enter Valid Email or Password!");
    }
  }
  return (
    <div className="login-page" onContextMenu={(e) => e.preventDefault()}>
      <div className="image-container"></div>
      <div className="login-form">
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
              placeholder="name@CV.com"
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
            <a href="/register">Create one?</a>
          </div>

          <button
            onClick={(e) => HandleLoginForm(e)}
            className="btn btn-primary login-btn"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
