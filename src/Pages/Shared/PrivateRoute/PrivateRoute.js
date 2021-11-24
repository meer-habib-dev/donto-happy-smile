import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <button
        type="button"
        className=" text-black py-3 px-2 z-50 flex align-middle w-screen h-screen justify-center"
      >
        <svg
          class="animate-spin z-50 ml-20 h-5 w-5  text-left text-white ..."
          viewBox="0 0 24 24"
        ></svg>
        <p className="mt-50"> Processing...</p>
      </button>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
