"use client";

import Image from "next/image";

import Head from "next/head";
import Banner from "@/components/Banner";

import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import FairCalculator from "@/components/FairCalculator";
import OurServices from "@/components/OurServices";
import ComponentHeader from "@/components/ComponentHeader";
import Form from "@/components/Form";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>EleKars</title>
        <meta
          name="Description"
          content=" Book Your Electric Vehicle Online - Fast & Easy EV Car Rentals | Affordable EV Car Hire Services for a Greener Future"
        />
        <meta name="viewport" content="width=device-width,initials-scale=1.0" />
      </Head>
      <div className="gap-4">
        <Banner />
        <OurServices />
        <ComponentHeader title={"Get In Touch With Us!"} />
        <Form />
        <ComponentHeader title={"Why Choose Us!"} />
        <WhyUs />
        {/* <div className="pb-6 md:px-6 flex flex-co border-2 mx-4 rounded-xl  md:justify-between">
          {" "}
          <Form />
          <div className="md:w-1/2 px-2 flex">
            <EnquiryForm />
          </div>
          <div className="md:w-1/">
            <Image
              src={"/taxi.jpg"}
              width={100}
              height={100}
              alt="contact us"
            />
          </div>
        </div> */}
        <div>
          <div>
            {" "}
            <FairCalculator />
          </div>
          <div></div>
        </div>

        <Footer />
      </div>
    </>
  );
}
