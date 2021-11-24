import React from "react";
import { useParams } from "react-router";
import useService from "../Hooks/useServices";
import ShowService from "./ShowService";

const ServiceDetails = () => {
  const [services] = useService();
  const { serviceId } = useParams();
  const matchService = services.filter((service) => service.id == serviceId);
  // setServices(matchService);
  // console.log(matchService, serviceId);
  return (
    <div>
      {matchService.map((service) => (
        <ShowService key={service.id} service={service}></ShowService>
      ))}
    </div>
  );
};

export default ServiceDetails;
