import React from "react";

const HomeDoctorSection = () => {
  return (
    <div>
      <section>
        <div className="w-10/12 md:py-28 mx-auto">
          <p className="text-5xl mt-12 md:mt-0 font-extrabold tracking-wider  text-center">
            Our Dentists
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 ">
            {/* doctor one */}
            <div className="single-doctor text-center pt-10">
              <div className="doctor-profile mb-8 pt-6">
                <img
                  className=""
                  src="https://donto-react.netlify.app/static/media/d1.904490fe.png"
                  alt=""
                />
              </div>
              <p className="doctor-hover text-2xl mt-6 font-bold tracking-wider leading-10">
                Darry Milin
              </p>
              <p className="text-gray-500 font-medium pb-4 mb-10 border-b border-gray-200 w-10/12 mx-auto">
                {" "}
                Oral Surgeon
              </p>
            </div>

            {/* doctor two */}
            <div className="single-doctor text-center pt-10">
              <div className="doctor-profile mb-8 pt-6">
                <img
                  className=""
                  src="https://donto-react.netlify.app/static/media/d2.c88fc8f8.png"
                  alt=""
                />
              </div>
              <p className="doctor-hover text-2xl mt-6 font-bold tracking-wider leading-10">
                Salman Ahmed
              </p>
              <p className="text-gray-500 font-medium pb-4 mb-10 border-b border-gray-200 w-10/12 mx-auto">
                {" "}
                Oral Surgeon
              </p>
            </div>
            {/* doctor three */}
            <div className="single-doctor text-center pt-10">
              <div className="doctor-profile mb-8 pt-6">
                <img
                  className=""
                  src="https://donto-react.netlify.app/static/media/d3.1e523b96.png"
                  alt=""
                />
              </div>
              <p className="doctor-hover  text-2xl mt-6 font-bold tracking-wider leading-10">
                Santa Binte
              </p>
              <p className="text-gray-500 font-medium pb-4 mb-10 border-b border-gray-200 w-10/12 mx-auto">
                {" "}
                Oral Surgeon
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDoctorSection;
