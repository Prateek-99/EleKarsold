import { useState } from "react";
import ComponentHeader from "./ComponentHeader";

const JourneyForm = () => {
  const [formData, setFormData] = useState({
    tripType: "",
    name: "",
    mobile: "",
    email: "",
    dateTime: "",
    pickup: "",
    dropoff: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <div>
      <form
        className="min-w-[380px] mx-2 bg-white md:min-w-[500px] md:max-w-[500px]] max-w-[400px] md:mx-auto pb-4 border-2 border-[#5c8ffc]  b shadow-xl rounded-[15px]"
        onSubmit={handleSubmit}
      >
        {/* <div className="flex justify-center bg-[#5c8ffc] items-center p-2 rounded-t-[35px]">
          <h2 className="text-2xl text-white font-bold ">Book Your Journey</h2>
        </div> */}

        {/* Radio buttons for trip type */}
        <div className="  p-4">
          <label className="block font-medium mb-2">Trip Type</label>
          <div className="flex justify-around  md:justify-between gap-2 md:gap-4">
            <label className="inline-flex  border-2 bg-green-50 border-green-100 p-2 rounded-md items-center">
              <input
                type="radio"
                name="tripType"
                value="one-way"
                checked={formData.tripType === "one-way"}
                onChange={handleChange}
                className="form-radio "
              />
              <span className="md:ml-2 ml-1 whitespace-nowrap text-[12px] md:text-[14px]">
                One Way
              </span>
            </label>

            <label className="inline-flex border-2 bg-green-50 border-green-100 p-2 rounded-md items-center">
              <input
                type="radio"
                name="tripType"
                value="round-trip"
                checked={formData.tripType === "round-trip"}
                onChange={handleChange}
                className="form-radio text-blue-500"
              />
              <span className="md:ml-2 ml-1 whitespace-nowrap text-[12px] md:text-[14px]">
                Round Trip
              </span>
            </label>

            <label className="inline-flex border-2 bg-green-50 p-2 border-green-100 rounded-md items-center">
              <input
                type="radio"
                name="tripType"
                value="semi-round-trip"
                checked={formData.tripType === "semi-round-trip"}
                onChange={handleChange}
                className="form-radio text-blue-500"
              />
              <span className="md:ml-2 ml-1 whitespace-nowrap text-[12px] md:text-[14px]">
                Semi Round Trip
              </span>
            </label>
          </div>
        </div>

        {/* Name */}
        <div className=" p-2 px-4">
          <label className="block font-medium mb-1 px-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-[#33ae60] rounded-2xl"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Mobile */}
        <div className="p-2 px-4">
          <label className="block font-medium mb-2" htmlFor="mobile">
            Mobile No.
          </label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border border-[#33ae60] rounded-2xl"
            placeholder="Enter your mobile number"
            required
          />
        </div>

        {/* Email */}
        <div className="p-2 px-4">
          <label className="block font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-[#33ae60] rounded-2xl"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Date & Time */}
        <div className="p-2 px-4">
          <label className="block font-medium mb-2" htmlFor="dateTime">
            Date & Time of Journey
          </label>
          <input
            type="datetime-local"
            name="dateTime"
            id="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            className="w-full p-2 border border-[#33ae60] rounded-2xl"
            required
          />
        </div>

        <div className="flex">
          {/* Pickup */}
          <div className="p-2 px-4">
            <label className="block font-medium mb-2" htmlFor="pickup">
              Pickup Location
            </label>
            <input
              type="text"
              name="pickup"
              id="pickup"
              value={formData.pickup}
              onChange={handleChange}
              className="w-full p-2 border border-[#33ae60] rounded-2xl"
              placeholder="Enter pickup location"
              required
            />
          </div>

          {/* Dropoff */}
          <div className="p-2 px-4">
            <label className="block font-medium mb-2" htmlFor="dropoff">
              Dropoff Location
            </label>
            <input
              type="text"
              name="dropoff"
              id="dropoff"
              value={formData.dropoff}
              onChange={handleChange}
              className="w-full p-2 border border-[#33ae60] rounded-2xl"
              placeholder="Enter dropoff location"
              required
            />
          </div>
        </div>

        {/* Submit button */}
        <div className="px-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2  rounded-xl hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JourneyForm;
