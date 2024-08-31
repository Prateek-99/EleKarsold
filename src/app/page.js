"use client";

import Image from "next/image";

import Head from "next/head";
import Banner from "@/components/Banner";

import EnquiryForm from "@/components/EnquiryForm";

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
      <div>
        <Banner />
        <EnquiryForm />
      </div>
    </>
  );
}
