import React, { useState } from "react";
import { MdVisibility } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, username, password, confirmPassword } =
    formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const navigateToSignIn = () => {
    navigate("/login");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted")
  };

  return (
    <div className="signupPage">
      <main className="signupForm">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>

          <div className="firstnameInputDiv">
            <label htmlFor="firstName">Firstname</label>
            <input
              type="text"
              className="nameInput"
              id="firstName"
              value={firstName}
              onChange={onChange}
              required
            />
          </div>

          <div className="lastnameInputDiv">
            <label htmlFor="lastName">Lastname</label>
            <input
              type="text"
              className="nameInput"
              id="lastName"
              value={lastName}
              onChange={onChange}
              required
            />
          </div>

          <div className="emailInputDiv">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="emailInput"
              id="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>

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

          <div className="confirmPasswordInputOuterDiv">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="passwordInputDiv">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="passwordInput"
                value={confirmPassword}
                onChange={onChange}
                id="confirmPassword"
                required
              />
              <MdVisibility
                size={25}
                className="showPassword"
                onClick={() =>
                  setShowConfirmPassword((prevState) => !prevState)
                }
              />
            </div>
          </div>

          <button type="submit">
            Sign up
          </button>
        </form>
        <p>Already have an account? <span onClick={navigateToSignIn}>Login</span></p>
      </main>
    </div>
  );
}

export default Signup;
