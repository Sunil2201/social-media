import React, { useContext, useState } from "react";
import { MdVisibility } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Signup() {
  const { handleUserSignup } = useContext(AuthContext);
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
    handleUserSignup(username, password, firstName, lastName);
  };

  return (
    <div className="signupPage">
      <section className="signupVideoContainer">
        <video
          src="https://res.cloudinary.com/dp6uypw0c/video/upload/v1690784032/Untitled_video_-_Made_with_Clipchamp_ityvh3.mp4"
          autoPlay
          playbackRate={1.5}
          muted
          loop
          controls={false}
        />
      </section>
      <main className="signupForm">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="firstnameInputDiv">
            <input
              type="text"
              className="nameInput"
              id="firstName"
              value={firstName}
              onChange={onChange}
              placeholder="Enter Firstname"
              required
            />
          </div>

          <div className="lastnameInputDiv">
            <input
              type="text"
              className="nameInput"
              id="lastName"
              value={lastName}
              onChange={onChange}
              placeholder="Enter Lastname"
              required
            />
          </div>

          <div className="emailInputDiv">
            <input
              type="email"
              className="emailInput"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="usernameInputDiv">
            <input
              type="text"
              className="usernameInput"
              value={username}
              onChange={onChange}
              id="username"
              placeholder="Enter Username"
              required
            />
          </div>

          <div className="passwordInputOuterDiv">
            <div className="passwordInputDiv">
              <input
                type={showPassword ? "text" : "password"}
                className="passwordInput"
                value={password}
                onChange={onChange}
                id="password"
                placeholder="Enter Password"
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
            <div className="passwordInputDiv">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="passwordInput"
                value={confirmPassword}
                onChange={onChange}
                placeholder="Confirm Password"
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

          <button type="submit">Sign up</button>
        </form>
        <p>
          Already have an account? <span onClick={navigateToSignIn}>Login</span>
        </p>
      </main>
    </div>
  );
}

export default Signup;
