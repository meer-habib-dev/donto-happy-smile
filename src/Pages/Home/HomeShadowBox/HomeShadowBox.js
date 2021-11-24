import React from "react";

const HomeShadowBox = () => {
  return (
    <section>
      <div className="w-10/12 mx-auto py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="single-box text-center px-4 py-6 md:px-14 md:py-20">
            <img
              className="mx-auto mb-10"
              src="https://donto-react.netlify.app/static/media/appointment.c2e8b7ae.svg"
              alt=""
            />
            <p className="text-2xl font-medium mb-6">Easy Appointment</p>
            <p className="text-gray-500 font-light">
              Lorem Ipsum is simply is very dummy text of the printings and type
              setting
            </p>
          </div>
          <div className="single-box text-center px-4 py-6 md:px-14 md:py-20">
            <img
              className="mx-auto mb-10"
              src="https://donto-react.netlify.app/static/media/icon3.3d000cd0.svg"
              alt=""
            />
            <p className="text-2xl font-medium mb-6">Emergency Service</p>
            <p className="text-gray-500 font-light">
              Get our text demo is simply dummy text of the printings and type
              for content
            </p>
          </div>
          <div className="single-box text-center px-4 py-6 md:px-14 md:py-20">
            <img
              className="mx-auto mb-10"
              src="https://donto-react.netlify.app/static/media/icon.7cbafe70.svg"
              alt=""
            />
            <p className="text-2xl font-medium mb-6">24/7 Service</p>
            <p className="text-gray-500 font-light">
              Lorem Ipsum is demo simply dummy text of the printings and type
              and setting
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeShadowBox;
