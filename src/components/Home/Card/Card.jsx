import React from "react";

const Card = () => {
  const imageUrl = "https://i.ibb.co/1R0vT3s/Rectangle-1365.png";
  const imageUrl2 = "https://i.ibb.co/WHgMYZF/My-project-1-3.png";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">

      <div className="relative w-full h-auto overflow-hidden">
        <img src={imageUrl} alt="Your Image" className="object-cover w-full h-full" />
        <div className="absolute left-0 w-full h-full flex flex-col justify-center items-center   -top-[70px] md:-top-32  lg:-top-[170px] xl:-top-[230px]">
          <p className=" text-sm sm:text-lg md:text-2xl lg:text-4xl">
            Trade-In
          </p>
          <p className="text-xs underline">
            Exchange your old car with new one
          </p>
          <p className="text-xs underline">Explore Details</p>
        </div>
      </div>

      <div className="relative bg-[#D9D9D9] w-full h-auto overflow-hidden">
        <img src={imageUrl2} alt="Your Image" className="object-cover w-full h-full" />
        <div className="absolute left-0 w-full h-full flex flex-col justify-center items-center   -top-[90px] md:-top-32  lg:-top-[170px] xl:-top-[230px]">
          <p className="text-sm sm:text-lg md:text-2xl lg:text-4xl">
            e-Garage
          </p>
          <p className="text-xs underline">
            Where your car takes car service there.
          </p>
          <p className="text-xs underline">Explore Details</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
