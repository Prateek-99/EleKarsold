// components/Banner.js
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className=" bg-[#e5e7eb]/30 md:rounded-xl md:flex grid items-center justify-between md:mx-4">
      <div className=" relative w-full hidden md:flex md:w-1/2   justify-center items-center">
        {" "}
        <Image
          src={"/evbackground.avif"}
          width={800}
          height={500}
          alt="ev charger"
          className=" rounded-l-xl"
        />
        <p className="absolute bottom-[2%] px-4 text-center text-lg font-sans font-bold text-[#33ae60]">
          Most Affordable and Safe EV Cab Services in Korba - Reliable Electric
          Vehicle Taxi Rentals for Every Journey
        </p>
      </div>
      <div className="md:w-1/2 w-full relative flex justify-center items-center ">
        <Image
          src={"/punch.jpg"}
          width={800}
          height={500}
          alt="punch ev"
          className=" rounded-r-xl"
        />
          <p className="absolute hidden md:block bottom-[4%] px-4 text-center text-lg font-sans font-bold text-[#447af0]">
          Comfort, Safety, and Reliability: Book Your Eco-Friendly EV Ride Now!
        </p>
      </div>
    </div>
  );
};

export default Banner;
