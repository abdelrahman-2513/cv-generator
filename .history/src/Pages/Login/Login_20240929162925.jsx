import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLogin } from "../../assets/Api/Auth/AuthAPI";
import useAuthStore from "../../assets/Zustand/Auth/UserAuth";
import toast from "react-hot-toast";

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
      AuthLogin({ username: email, password: password })
        .then((response) => {
          login(response);
          toast.success("Login Successful", { id: 1 });
          navigate("/");
        })
        .catch((error) => {
          toast.error("Invalid to Login!", { id: 1 });
        });
    } else {
      toast.error("Please Enter Valid Email or Password!");
    }
  }
  return (
    <div className="login-page" onContextMenu={(e) => e.preventDefault()}>
      <div className="image-container">
        <img src="/images/day1.png" alt="Day Image" />
      </div>
      <div className="login-form">
        <div className="form-title">
          <div className="logo">
            <img src="/images/login-logo.png" alt="Sky Culinaire" />
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
