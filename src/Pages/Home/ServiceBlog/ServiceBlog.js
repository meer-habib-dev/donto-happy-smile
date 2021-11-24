import React from "react";
import useService from "../../Hooks/useServices";
import Services from "../ServicesSection/Services";

const ServiceBlog = () => {
  const [services] = useService();
  return (
    <div>
      <div className="">
        {/* treatement section */}
        <section className="home-section">
          <div className="w-10/12 py-28 mx-auto">
            <p className="text-5xl font-extrabold tracking-wider text-white text-center mt-20">
              Treatments
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 ">
              {services.map((service) => (
                <Services key={service.id} service={service}></Services>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceBlog;
