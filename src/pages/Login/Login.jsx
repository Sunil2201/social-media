import React, { useContext, useState } from "react";
import { MdVisibility } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
  const {handleUserLogin} = useContext(AuthContext)
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const { username, password } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUserLogin(username, password)
  };

  const navigateToSignup = () => {
    navigate("/signup")
  };

  return (
    <div className="loginPage">
      <main className="loginForm">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="usernameInputDiv">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              className="usernameInput"
              value={username}
              onChange={onChange}
              id="username"
              required
            />
          </div>
          <div className="passwordInputOuterDiv">
            <label htmlFor="password">Password</label>
            <div className="passwordInputDiv">
              <input
                type={showPassword ? "text" : "password"}
                className="passwordInput"
                value={password}
                onChange={onChange}
                id="password"
                required
              />
              <MdVisibility
                size={25}
                className="showPassword"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>
          </div>
          <div className="buttonContainer">
            <button type="submit">Sign In</button> &nbsp;
            <button type="button">Test user</button>
          </div>
        </form>
        <p>
          Don't have an account? <span onClick={navigateToSignup}>Signup</span>
        </p>
      </main>
    </div>
  );
}

export default Login;
