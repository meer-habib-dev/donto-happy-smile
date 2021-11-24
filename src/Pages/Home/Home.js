import React from "react";
import "./Home.css";
import Services from "./ServicesSection/Services";
import useService from "../Hooks/useServices";
import HomeTop from "./HomeTop/HomeTop";
import HomeShadowBox from "./HomeShadowBox/HomeShadowBox";
import HomeFamilySection from "./HomeFamily/HomeFamilySection";
import HomeDoctorSection from "./HomeDoctor/HomeDoctorSection";
import HomeAppointment from "./HomeAppointment/HomeAppointment";

const Home = () => {
  const [services] = useService();
  return (
    <>
      {/* Home Top start */}
      <HomeTop></HomeTop>

      {/* Home ShadowBox  start */}
      <HomeShadowBox></HomeShadowBox>

      {/* Home Appointment start */}
      <HomeAppointment></HomeAppointment>

      {/* Family sections start */}
      <HomeFamilySection></HomeFamilySection>

      {/* Treatment section */}
      <section id="treatment" className="home-section">
        <div className="w-10/12 py-28 mx-auto">
          <p className="text-3xl md:text-5xl font-extrabold tracking-wider text-white text-center">
            Treatments
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 ">
            {services.map((service) => (
              <Services key={service.id} service={service}></Services>
            ))}
          </div>
        </div>
      </section>

      {/* Dentist section start */}
      <HomeDoctorSection></HomeDoctorSection>
    </>
  );
};

export default Home;
