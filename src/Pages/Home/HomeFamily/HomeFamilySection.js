import React from "react";
import { Link } from "react-router-dom";
import family from "../../../image/family.png";

const HomeFamilySection = () => {
  return (
    <div>
      <section id="family">
        <div className="w-10/12 py-28 mx-auto">
          <div className="md:flex w-full align-middle md:justify-between">
            <div className="w-10/12 mb-4 md:mb-0 md:w-6/12">
              <img src={family} alt="" />
            </div>
            <div className="family-info w-10-12 text-center md:text-left md:w-6/12">
              <div>
                <p className="text-3xl font-semibold mb-8 tracking-wider">
                  Welcome to a Family
                </p>
                <p className="text-gray-500 leading-8 tracking-wide font-medium mb-6 ">
                  Welcome to Datobbo Dental represents everything going to
                  dentist necessary. We have upgraded your dreaded dentist
                  appointment and transformed it into a relaxing.
                </p>
                <Link to="about">
                  <span className="text-pink-500 border-b-2 border-pink-400">
                    About Us
                  </span>
                </Link>
              </div>
              <div className="info-section py-10 px-4 md:px-20 mt-12 flex justify-between align-middle ">
                <div className="md:border-r-2 w-6/12">
                  <div className="mb-8">
                    <p className="text-1xl md:text-2xl font-bold mb-2">500+</p>
                    <p className=" text-gray-500">Happy Clients</p>
                  </div>
                  <div className="mb-8">
                    <p className="text-1xl md:text-2xl font-bold mb-2">25+</p>
                    <p className="text-gray-500">Years Experience</p>
                  </div>
                </div>
                <div className="">
                  <div className="mb-8">
                    <p className="text-1xl md:text-2xl font-bold mb-2">88+</p>
                    <p className="text-gray-500">Qualified Doctors</p>
                  </div>
                  <div className="mb-8">
                    <p className="text-1xl md:text-2xl font-bold mb-2">55+</p>
                    <p className="text-gray-500">Dentals Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeFamilySection;
