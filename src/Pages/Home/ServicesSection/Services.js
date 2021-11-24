import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = ({ service }) => {
  const { id, title, home_img, description } = service;
  return (
    <div>
      {/* treatement section */}
      <div className=" service-box text-center  md:text-left ">
        <img className="mb-8 mx-auto md:ml-auto" src={home_img} alt="" />
        <p className="text-2xl mb-6 font-bold text-white tracking-wider leading-10">
          {title}
        </p>
        <p className="text-gray-300 mb-6">{description.slice(0, 85)}</p>
        <Link to={`/services/${id}`}>
          <span className="text-gray-300 font-bolder  leading-10 pb-1 tracking-wider border-b-2 border-pink-500">
            About Us
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Services;
