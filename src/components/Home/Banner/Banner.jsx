import React from "react";
import Marcedes from "./Marcedes";
import Rangrover from "./Rangrover";

const Banner = () => {
  const imageUrl = "https://i.ibb.co/v1K4Mhr/Rectangle-2.png";

  return (
    <div>
      <div className="relative w-full">
        <img src={imageUrl} alt="Your Image" className="w-full h-auto" />
        <div className="absolute left-0 w-full h-full flex flex-col justify-center items-center   -top-[70px] md:-top-32  lg:-top-[170px] xl:-top-[280px]">
          <p className=" text-sm sm:text-lg md:text-2xl lg:text-4xl font-Montserrat">
            Rolls Royce-Pantom
          </p>
          <p className=" text-lg underline font-Montserrat">Explore Details</p>
        </div>
      </div>
      <Marcedes></Marcedes>
      <Rangrover></Rangrover>
    </div>
  );
};

export default Banner;
