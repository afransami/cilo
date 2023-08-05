import React from "react";

const Card = () => {
  const imageUrl = "https://i.ibb.co/1R0vT3s/Rectangle-1365.png";
  const imageUrl2 = "https://i.ibb.co/c1f2Zmm/Rectangle-1366-1.png";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 mx-auto container">
      <div className="relative w-full h-auto overflow-hidden">
        <img
          src={imageUrl}
          alt="Your Image"
          className="object-cover w-full h-full"
        />
        <div
          className="absolute left-0 w-full h-full"
          style={{ fontFamily: "Gotham, sans-serif" }}
        >
          <p className=" text-xl sm:text-xl md:text-xl lg:text-2xl font-bold">
            Trade-In
          </p>
          <p className="text-[14px] ">Exchange your old car with new one</p>
          <p className=" text-[13px] underline mt-4 sm:mt-2 md:mt-2 lg:mt-8 font-semibold">
            Explore Details
          </p>
        </div>
      </div>

      <div className="relative bg-[#D9D9D9] w-full h-auto overflow-hidden">
        <img
          src={imageUrl2}
          alt="Your Image"
          className="object-cover w-full h-full"
        />
        <div
          className="absolute left-0 w-full h-full"
          style={{ fontFamily: "Gotham, sans-serif" }}
        >
          <p className=" text-xl sm:text-xl md:text-xl lg:text-2xl font-bold">
            e-Garage
          </p>
          <p className="text-[14px]">Where your car takes car service there.</p>
          <p className="font-semibold text-[13px] underline mt-4 sm:mt-2 md:mt-2 lg:mt-8">
            Explore Details
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
