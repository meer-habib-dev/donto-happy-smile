import React from "react";
import { Link } from "react-router-dom";

const HomeAppointment = () => {
  return (
    <div>
      <section>
        <div className="home-section py-12 ">
          <div className="w-10/12 mx-auto md:flex md:justify-between align-middle">
            <div className="w-full mx-auto md:w-6/12  my-auto text-center">
              <h2 className="text-1xl md:text-3xl md:text-left text-white font-bold tracking-wider leading-10 mb-8 pr-0 md:pr-6">
                Request your appointment and start your smile makeover!
              </h2>
              <div className="w-full md:w-10/12 md:mr-auto">
                <Link to="/service">
                  <button className="appointment-btn w-full md:mr-4 ">
                    Appointment
                  </button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block mx-auto">
              <img
                className="hidden md:block"
                src="https://donto-react.netlify.app/static/media/doctor-nars.d108b94e.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAppointment;
