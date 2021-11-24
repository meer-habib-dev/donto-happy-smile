import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="home-section w-screen h-screen flex flex-col justify-center mx-auto align-middle">
      <h1 class="text-3xl md:text-5xl text-white text-center font-extrabold pb-8">
        404 page not found!!!🥱👿👹
      </h1>
      <Link to="/home">
        <button className="appointment-btn flex align-middle mx-auto">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
