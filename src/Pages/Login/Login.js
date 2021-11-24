import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { handleEmail, handlePassword, handleSubmit, signInUsingGoogle } =
    useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirectUri = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then(() => {
      history.push(redirectUri);
    });
  };

  return (
    <div className="login-section">
      <div className=" w-full h-full pt-48 pb-20 md:pt-56 md:pb-36 mx-auto max-w-md">
        <div className="login-box ">
          <p className="text-2xl text-center font-bold mb-4">Login</p>
          <form className=" mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                onChange={handleEmail}
                className="rounded-full py-3 px-6 shadow appearance-none border w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="mb-6">
              <input
                onChange={handlePassword}
                className="rounded-full py-3 px-6 shadow appearance-none border w-full text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 w-full rounded-full py-3 text-white font-bold px-4 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="flex flex-col justify-center mt-6">
            <span className="text-center mb-6">
              -------------- or --------------
            </span>
            <button
              onClick={handleGoogleSignIn}
              className="w-12 h-12 rounded-full mx-auto bg-red-500"
            >
              <i className="fab fa-google text-center text-white "></i>
            </button>
            <p className="text-gray-500 text-bolder text-center mt-6">
              New to Donto? <Link to="/register">Register Now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
