import { services } from "@/lib/services";
import React from "react";
import ServicesCard from "../cards/ServicesCard";

const Services = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center  ">
        <div>
          <h1>Service</h1>
          <h2 className="text-4xl">Our Service Area</h2>
          <p className="text-xs">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which don't look even slightly
            believable.{" "}
          </p>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 ">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
