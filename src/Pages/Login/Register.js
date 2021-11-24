import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Register = () => {
  const {
    handleName,
    handleEmail,
    handlePassword,
    handleSubmit,
    signInUsingGoogle,
  } = useAuth();
  return (
    <div>
      <div className="login-section">
        <div className=" w-full h-full pt-48 md:pt-56 pb-20 md:pb-36 mx-auto max-w-md">
          <div className="login-box ">
            <p className="text-2xl text-center font-bold mb-4">Register Here</p>
            <form className=" mx-auto" onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  onChange={handleName}
                  className="rounded-full py-3 px-6 shadow appearance-none border w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="name"
                  placeholder="Enter Name"
                  required
                />
              </div>
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
                  Register
                </button>
              </div>
            </form>

            <div className="flex flex-col justify-center mt-6">
              <span className="text-center mb-6">
                -------------- or --------------
              </span>
              <button
                onClick={signInUsingGoogle}
                className="w-12 h-12 rounded-full mx-auto bg-red-500"
              >
                <i className="fab fa-google text-center text-white "></i>
              </button>
              <p className="text-gray-500 text-bolder text-center mt-6">
                Already have an account? <Link to="/login">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
