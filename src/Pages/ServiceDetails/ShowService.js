import React from "react";
import { Link } from "react-router-dom";
import "./ShowServices.css";

const ShowService = ({ service }) => {
  const { title, description, image } = service;
  console.log(title);
  return (
    <div className="login-section">
      <div className=" w-10/12 h-full pt-48 pb-36 mx-auto ">
        <div className="show-service-box ">
          <div className="">
            <img className="mx-auto" src={image} alt="" />
          </div>
          <div>
            <p className="text-3xl text-center font-bold my-8 text-pink-500">
              {title}
            </p>
            <div className=" w-10/12 md:w-8/12 mx-auto">
              <p className="text-gray-500 font-semibold text-justify">
                {description}
              </p>
            </div>
          </div>
          <div className="w-full md:w-8/12 mx-auto text-center mt-10">
            <Link to="/contact">
              {" "}
              <button className="appointment-btn md:mr-4">Appointment</button>
            </Link>
            <Link to="/home">
              <button className="learn-btn">Back Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowService;
