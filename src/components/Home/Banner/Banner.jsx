import React from "react";
import Marcedes from "./Marcedes";
import Rangrover from "./Rangrover";

const Banner = () => {
  const imageUrl = "https://i.ibb.co/v1K4Mhr/Rectangle-2.png";

  return (
    <div>
      <div className="relative w-full">
        <img src={imageUrl} alt="Your Image" className="w-full h-auto bg-cover object-contain" />
        <div className="absolute left-0 w-full h-full" style={{ fontFamily: 'Gotham, sans-serif' }}>
        {/* <div className="absolute left-0 w-full h-full flex flex-col justify-center items-center   -top-[75px] 2xl-top-[70px] md:-top-32  lg:-top-[170px] xl:-top-[290px]" style={{ fontFamily: 'Gotham, sans-serif' }}> */}
          <p className=" text-[15px] sm:text-base md:text-xl lg:text-4xl font-bold">
            Rolls Royce-Pantom
          </p>
          <p className=" text-[13px] underline mt-1 sm:mt-2 md:mt-6 lg:mt-8">Explore Details</p>
        </div>
      </div>
      <Marcedes></Marcedes>
      <Rangrover></Rangrover>

      {/* <style>
    {`
      @media (min-width: 667px) and (max-height: 414px) and (orientation: landscape) {
        .absolute {
          top: 15%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    `}
  </style> */}

    </div>
  );
};

export default Banner;
