// components/Header.js
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex items-center p-4 bg-gray-100">
        <Image
          src="/logo.jpg"
          width={100}
          height={100}
          alt="Logo"
          className="object-fill w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-xl shadow-lg border-2"
        />
        <div className="text-center text-xl font-bold flex-grow">
          <h1 className="text-blue-500 md:text-[80px] text-[50px] italic font-semibold font-serif">
            Ele<span className="text-[#33ae60]">kars</span>
          </h1>
        </div>
        <Image
          src="/logo.jpg"
          width={100}
          height={100}
          alt="Logo"
          className="object-fill hidden md:block rounded-xl shadow-lg border-2"
        />
      </div>
      <p className="text-lg p-1 hidden md:block font-semibold text-center bg-green-400 text-white font-sans px-4">
        Hop into the future with Elekars! Safe rides, eco-friendly travel, and
        affordable prices - all in our stylish Tata Tiago EVs. Ready to roll?
        Let's make every journey a green one.
      </p>
    </header>
  );
};

export default Header;
