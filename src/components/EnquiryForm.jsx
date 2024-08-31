"use client";
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Swal from "sweetalert2";
import Usps from "./Usp";

const EnquiryForm = () => {
  // State to hold form input values
  const [userDetails, setUserDetails] = useState({
    name: "",
    mobileNumber: "",
    journeyDateTime: "",
    locationFrom: "",
    locationTo: "",
    tripType: "",
    email: "",
  });

  //   state to handle alerts
  const [alerts, setAlerts] = useState(false);

  // State to hold validation errors
  const [errors, setErrors] = useState({});

  // State to hold min date and time
  const [minDate, setMinDate] = useState("");
  const [minTime, setMinTime] = useState("");

  useEffect(() => {
    // Set minimum date to today
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);

    // Set minimum time to 45 minutes from now
    const now = new Date();
    now.setMinutes(now.getMinutes() + 45);
    const minTimeString = now.toISOString().split("T")[1].substring(0, 5);
    setMinTime(minTimeString);
  }, []);

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (userDetails.name.length < 5) {
      newErrors.name = "Name must be at least 5 characters long.";
    }

    // Mobile number validation
    const mobilePattern = /^[6-9]\d{9}$/;
    if (!mobilePattern.test(userDetails.mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number.";
    }

    // Date & Time validation
    if (!userDetails.journeyDateTime) {
      newErrors.journeyDateTime =
        "Please select a date and time for your journey.";
    }

    // Location From validation
    if (!userDetails.locationFrom) {
      newErrors.locationFrom = "Please enter your pickup location.";
    }

    // Location To validation
    if (!userDetails.locationTo) {
      newErrors.locationTo = "Please enter your destination location.";
    }

    // Trip Type validation
    if (!userDetails.tripType) {
      newErrors.tripType = "Please select a trip type.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(userDetails);
      await Swal.fire({
        title: "Thank you!",
        text: "Your enquiry has been submitted successfully.Our Executive will reach out to you shortly",
        icon: "success",
        confirmButtonText: "OK",
      });
      setUserDetails({
        name: "",
        mobileNumber: "",
        journeyDateTime: "",
        locationFrom: "",
        locationTo: "",
        tripType: "",
        email: "", // Add this line if you have an email field
      });
    } else {
      console.log("Validation failed.");
      await Swal.fire({
        title: "Error!",
        text: "Please check the form",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row bg-white rounded-lg shadow-lg md:px-4">
      {/* USP Section */}
      <div className="md:w-1/2 p-2 md:p-4  rounded-l-lg">
        <Usps />
      </div>

      {/* Form Section */}
      <div className="md:w-1/2 p-4 bg-blue-50 px-12 rounded-r-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#33ae60]">
          Book Your Ride
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[#22448b]">Name</label>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
              className="w-full p-2 border bg-blue-100 text-[#22448b] border-gray-300 rounded-md"
              placeholder="Enter your name"
              required
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-[#22448b]">Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              value={userDetails.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 border bg-blue-100 text-[#22448b] border-gray-300 rounded-md"
              placeholder="Enter your mobile number"
              required
            />
            {errors.mobileNumber && (
              <p className="text-red-500">{errors.mobileNumber}</p>
            )}
          </div>
          <div>
            <label className="block text-[#22448b]">
              Date & Time of Journey
            </label>
            <input
              type="datetime-local"
              name="journeyDateTime"
              value={userDetails.journeyDateTime}
              onChange={handleChange}
              className="w-full p-2 border bg-blue-100 text-[#22448b] border-gray-300 rounded-md"
              min={`${minDate}T${minTime}`}
              required
            />
            {errors.journeyDateTime && (
              <p className="text-red-500">{errors.journeyDateTime}</p>
            )}
          </div>
          <div>
            <label className="block text-[#22448b]">Pickup</label>
            <input
              type="text"
              name="locationFrom"
              value={userDetails.locationFrom}
              onChange={handleChange}
              className="w-full p-2 border bg-blue-100 text-[#22448b] border-gray-300 rounded-md"
              placeholder="Enter pickup location"
              required
            />
            {errors.locationFrom && (
              <p className="text-red-500">{errors.locationFrom}</p>
            )}
          </div>
          <div>
            <label className="block text-[#22448b]">Drop off</label>
            <input
              type="text"
              name="locationTo"
              value={userDetails.locationTo}
              onChange={handleChange}
              className="w-full p-2 border bg-blue-100 text-[#22448b] border-gray-300 rounded-md"
              placeholder="Enter destination location"
              required
            />
            {errors.locationTo && (
              <p className="text-red-500">{errors.locationTo}</p>
            )}
          </div>
          <div>
            <label className="block text-[#22448b]">Trip Type</label>
            <select
              name="tripType"
              value={userDetails.tripType}
              onChange={handleChange}
              className="w-full p-2 border bg-blue-100 text-[#22448b] border-gray-300 rounded-md"
              required
            >
              <option value="">Select Trip Type</option>
              <option value="one-way">One Way</option>
              <option value="round-trip">Round Trip</option>
            </select>
            {errors.tripType && (
              <p className="text-red-500">{errors.tripType}</p>
            )}
          </div>
          <div>
            <label className="block text-[#22448b]">Email (Optional)</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              className="w-full p-2 border bg-blue-100 text-[#22448b] border-gray-300 rounded-md"
              placeholder="Enter your email (optional)"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
