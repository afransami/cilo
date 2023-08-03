import React from "react";

const Marcedes = () => {
  const imageUrl = "https://i.ibb.co/1vf9258/Rectangle-3.png";
  return (
    <div className="relative w-full">
      <img src={imageUrl} alt="Your Image" className="w-full h-auto" />
      <div className="absolute left-0 w-full h-full  text-white" style={{ fontFamily: 'Gotham, sans-serif' }}>
      {/* <div className="absolute left-0 w-full h-full flex flex-col justify-center items-center   -top-[75px]  md:-top-32  lg:-top-[170px] xl:-top-[290px] text-white" style={{ fontFamily: 'Gotham, sans-serif' }}> */}
      <p className=" text-[15px] sm:text-base md:text-xl lg:text-4xl font-bold">
          Marcedese Benz
        </p>
        <p className=" text-[13px] underline mt-1 sm:mt-2 md:mt-6 lg:mt-8">Explore Details</p>
      </div>
    </div>

  );
};

export default Marcedes;
