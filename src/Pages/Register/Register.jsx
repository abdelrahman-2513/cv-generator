import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Register() {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const navigate = useNavigate();
  function HandleRegisterForm(e) {
    e.preventDefault();
    //console.log(email, password);
    if (email.length > 0 && password.length > 0) {
      if (password !== confirmPassword) {
        toast.error("Passwords Not Matched!");
      }
      toast.loading("Logging in...", { id: 1 });
      setTimeout(() => {
        navigate("/");
      });
    } else {
      toast.error("Please Enter Valid Email or Password!");
    }
  }
  return (
    <div className="Register-page" onContextMenu={(e) => e.preventDefault()}>
      <div className="left-intro">
        <h2>Welcome to CV Builder</h2>
        <p>
          Simplify your job application process with our easy-to-use CV generator tool.
          Create, manage, and download your professional CVs in minutes.
        </p>
        <p>
          Don't Have account? Signup and start creating your professional CV.
        </p>
      </div>
      <div className="Register-form">
        <div className="form-title">
          <div className="logo">
            <img src="/logo.png" alt="CV-Logo" />
          </div>
        </div>
        <form>
          <h3>Welcome Back!</h3>

          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="name@sky.com"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="name@sky.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="*************"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="*************"
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </div>
          <div className="link">
            <a href="/login">have account?</a>
          </div>

          <button
            onClick={(e) => HandleRegisterForm(e)}
            className="btn btn-primary Register-btn"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
