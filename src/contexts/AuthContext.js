import { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginService, signupService } from "../services/AuthService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const initialAuthState = {
    user: JSON.parse(localStorage.getItem("user")),
    token: JSON.parse(localStorage.getItem("token")),
  };

  const authReducer = (state, action) => {
    switch (action.type) {
      case "setUser":
        return { ...state, user: action.payload };
      case "setToken":
        return { ...state, token: action.payload };
      default:
        return state;
    }
  };

  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  const navigate = useNavigate();
  const location = useLocation();

  const handleUserLogin = async (username, password) => {
    try {
      const res = await loginService(username, password);
      const resJson = await res?.json();
      const { foundUser, encodedToken } = resJson;
      if (res?.status === 200) {
        localStorage.setItem("user", JSON.stringify(foundUser));
        authDispatch({ type: "setUser", payload: foundUser });
        localStorage.setItem("token", JSON.stringify(encodedToken));
        authDispatch({ type: "setToken", payload: encodedToken });
        navigate(
          location?.state?.from?.pathname
            ? location?.state?.from?.pathname
            : "/"
        );
      } else {
        console.log(resJson?.errors[0]);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleUserSignup = async (username, password, firstName, lastName) => {
    try {
      const res = await signupService(username, password, firstName, lastName);
      const resJson = await res.json();
      const { createdUser, encodedToken } = resJson;
      if (res?.status === 201) {
        localStorage.setItem("user", JSON.stringify(createdUser));
        authDispatch({ type: "setUser", payload: createdUser });
        localStorage.setItem("token", JSON.stringify(encodedToken));
        authDispatch({ type: "setToken", payload: encodedToken });
        navigate(
          location?.state?.from?.pathname
            ? location?.state?.from?.pathname
            : "/"
        );
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ authState, authDispatch, handleUserLogin, handleUserSignup }}
    >
      {children}
    </AuthContext.Provider>
  );
}
