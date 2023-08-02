import React from "react";

const Marcedes = () => {
  const imageUrl = "https://i.ibb.co/1vf9258/Rectangle-3.png";
  return (
    <div className="relative w-full">
      <img src={imageUrl} alt="Your Image" className="w-full h-auto" />
      <div className="absolute left-0 w-full h-full flex flex-col justify-center items-center   -top-[70px] md:-top-32  lg:-top-[170px] xl:-top-[280px]">
        <p className="text-white text-sm sm:text-lg md:text-2xl lg:text-4xl font-Montserrat">
          Marcedese Benz
        </p>
        <p className="text-white text-lg underline font-Montserrat">Explore Details</p>
      </div>
    </div>

  );
};

export default Marcedes;
