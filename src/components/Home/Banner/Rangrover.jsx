import React from "react";
import SearchBar from "../../Utils/SearchBar/SearchBar";

const Rangrover = () => {
  const imageUrl = "https://i.ibb.co/BzsGGLM/Rectangle-4.png";
  const imageUrl2 = "https://i.ibb.co/bH7LxWB/Rectangle-1448.png";

  return (
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
        className="absolute left-0 w-full h-full "
        style={{ fontFamily: "Gotham, sans-serif" }}
      >
        <p className="vtitle font-bold">Range Rover</p>
        <p className="underline mt-1 sm:mt-2 md:mt-6 lg:mt-8 font-semibold">
          Explore Details
        </p>
      </div>
    </div>
  );
};

export default Rangrover;
