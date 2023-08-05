import React from "react";
import Marcedes from "./Marcedes";
import Rangrover from "./Rangrover";

const Banner = () => {
  const imageUrl = "https://i.ibb.co/v1K4Mhr/Rectangle-2.png";
  const imageUrl2 = "https://i.ibb.co/tcZqyBh/Rectangle-2-1.png";

  return (
    <div>
      <div className="relative w-full">
        <img
          src={imageUrl}
          alt="Your Image"
          className="lg:block hidden w-full h-auto"
        />
        <img
          src={imageUrl2}
          alt="Your Image"
          className="w-full h-auto block lg:hidden"
        />
        <div
          className="absolute left-0 w-full h-full"
          style={{ fontFamily: "Gotham, sans-serif" }}
        >
          <p className="vtitle font-bold">
            Rolls Royce-Pantom
          </p>
          <p className="underline mt-1 sm:mt-2 md:mt-6 lg:mt-8 font-semibold">
            Explore Details
          </p>
        </div>
      </div>
      <Marcedes></Marcedes>
      <Rangrover></Rangrover>
    </div>
  );
};

export default Banner;
