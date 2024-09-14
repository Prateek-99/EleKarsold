import Image from "next/image";
import React from "react";

export default function WhyUs() {
  return (
    <div className=" flex flex-col border-2 p-4 gap-4 md:mx-4 rounded-xl  bg-fixed bg-gradient-to-tl from-[#56b176]  via-[#63ad7d] to-[#5c8ffc]  ">
      <div className="flex justify-center 1 ">
        <div className="md:flex md:gap-4 md:px-12  md:justify-start border- items-center ">
          <div className="flex justify-center md:w-ful">
            {" "}
            <Image
              src={"/cost.png"}
              width={150}
              height={150}
              alt="Cost Effective"
              className="md:w-full md:h-full"
            />
          </div>
          <div className="py-4 flex flex-col md:justify-start md:items-start justify-center items-center">
            {" "}
            <h2 className="text-[30px] leading-8 font-medium text-white">
              Cost Effective
            </h2>
            <p className="text-[14px] md:text-start text-center md:px-0 px-4 leading-5 font-normal pt-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              iure atque assumenda eum. Numquam delectus, ipsum voluptatibus
              facilis cum, accusantium aliquid, amet ratione ullam reprehenderit
              illo quia sed expedita impedit?
            </p>
          </div>
        </div>
        <div className="md:w-3/4 md:flex hidden justify-center">
          <Image src={"/punch.png"} width={400} height={200} alt="PunchEV" />
        </div>
      </div>

      <div className="flex justify-center 2 ">
        <div className="md:w-3/4 md:flex hidden justify-center">
          <Image src={"/punch.png"} width={400} height={200} alt="PunchEV" />
        </div>
        <div className="md:flex md:gap-4 md:px-12  md:justify-start border- items-center ">
          <div className="flex justify-center md:w-ful">
            {" "}
            <Image
              src={"/cost.png"}
              width={150}
              height={150}
              alt="Cost Effective"
              className="md:w-full md:h-full"
            />
          </div>
          <div className="py-4 flex flex-col md:justify-start md:items-start justify-center items-center">
            {" "}
            <h2 className="text-[30px] leading-8 font-medium text-white">
              Cost Effective
            </h2>
            <p className="text-[14px] md:text-start text-center md:px-0 px-4 leading-5 font-normal pt-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              iure atque assumenda eum. Numquam delectus, ipsum voluptatibus
              facilis cum, accusantium aliquid, amet ratione ullam reprehenderit
              illo quia sed expedita impedit?
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center 3 ">
        <div className="md:flex md:gap-4 md:px-12  md:justify-start border- items-center ">
          <div className="flex justify-center md:w-ful">
            {" "}
            <Image
              src={"/cost.png"}
              width={150}
              height={150}
              alt="Cost Effective"
              className="md:w-full md:h-full"
            />
          </div>
          <div className="py-4 flex flex-col md:justify-start md:items-start justify-center items-center">
            {" "}
            <h2 className="text-[30px] leading-8 font-medium text-white">
              Cost Effective
            </h2>
            <p className="text-[14px] md:text-start text-center md:px-0 px-4 leading-5 font-normal pt-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              iure atque assumenda eum. Numquam delectus, ipsum voluptatibus
              facilis cum, accusantium aliquid, amet ratione ullam reprehenderit
              illo quia sed expedita impedit?
            </p>
          </div>
        </div>
        <div className="md:w-3/4 md:flex hidden justify-center">
          <Image src={"/punch.png"} width={400} height={200} alt="PunchEV" />
        </div>
      </div>
      <div className="flex  justify-center 4 ">
        <div className="md:w-3/4 md:flex hidden justify-center">
          <Image src={"/punch.png"} width={400} height={200} alt="PunchEV" />
        </div>
        <div className="md:flex  md:gap-4 md:px-12  md:justify-start border- items-center ">
          <div className="flex justify-center md:w-ful">
            {" "}
            <Image
              src={"/cost.png"}
              width={150}
              height={150}
              alt="Cost Effective"
              className="md:w-full md:h-full"
            />
          </div>
          <div className="py-4 flex flex-col md:justify-start md:items-start justify-center items-center">
            {" "}
            <h2 className="text-[30px] leading-8 font-medium text-white">
              Cost Effective
            </h2>
            <p className="text-[14px] md:text-start text-center md:px-0 px-4 leading-5 font-normal pt-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              iure atque assumenda eum. Numquam delectus, ipsum voluptatibus
              facilis cum, accusantium aliquid, amet ratione ullam reprehenderit
              illo quia sed expedita impedit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
