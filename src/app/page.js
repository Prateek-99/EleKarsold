"use client";

import Image from "next/image";

import Head from "next/head";
import Banner from "@/components/Banner";

import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import FairCalculator from "@/components/FairCalculator";
import OurServices from "@/components/OurServices";

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
        <div className="py-6 px-6 flex justify-between">
          {" "}
          <div className="w-1/2">
            <EnquiryForm />
          </div>
          <div className="w-1/2"></div>
        </div>
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
