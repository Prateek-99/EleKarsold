import React from "react";
import OneWayServicesCard from "./OneWayServicesCard";
import RoundTripServicesCard from "./RoundTripServicesCard";
import SemiRoundTripServicesCard from "./SemiRoundTripServicesCard";
import ComponentHeader from "./ComponentHeader";

export default function OurServices() {
  return (
    <div className="py-8">
      <ComponentHeader
        title={"Our services"}
        subheading={"Reliable, Eco-Friendly Travel Solutions for Every Journey"}
      />
      <div className="flex gap-5 justify-center overflow-x-scroll">
        <OneWayServicesCard />
        <RoundTripServicesCard />
        <SemiRoundTripServicesCard />
      </div>
    </div>
  );
}
