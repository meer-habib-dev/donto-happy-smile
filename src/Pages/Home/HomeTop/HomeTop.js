import React from "react";
import img from "../../../image/home.png";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Hooks/useAuth";

const HomeTop = () => {
  const { user } = useAuth();
  return (
    <div id="home" className="home-section pb-28 flex justify-center">
      <div className=" pt-36 md:pt-56 w-10/12 mx-auto md:flex my-auto align-middle text-white">
        <div className="w-full mt-12 md:mt-0 md:w-6/12 ">
          {user?.email ? (
            <h2 className="text-2xl  sm:text-center md:text-left md:text-3xl font-bold tracking-wider mb-4">
              Welcome! {user.displayName || user.email}
            </h2>
          ) : (
            <h2 className="text-2xl sm:text-center md:text-left md:text-3xl font-bold tracking-wider mb-4">
              Better Life Through
            </h2>
          )}

          <h1 className="text-3xl  sm:text-center md:text-left md:text-6xl font-bold tracking-wider mb-8">
            Better Dentistry
          </h1>
          <p className="leading-6  sm:text-center md:text-left md:w-10/12 mb-8 font-medium text-gray-400">
            Join us to a fun and friendly dental environment. Our professionals
            are working so hard to see smile on your face that you deserve! We
            are dedicated about our duties.
          </p>
          <div className="w-full md:mx-auto md:flex">
            <HashLink smooth to="/home#treatment">
              <button className="appointment-btn sm:w-full md:w-56 md:flex justify-center  md:mr-4 mb-4 ">
                Treatments
              </button>
            </HashLink>
            <HashLink smooth to="/home#family">
              {" "}
              <button className="learn-btn sm:w-full md:w-56">
                Learn More
              </button>
            </HashLink>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
