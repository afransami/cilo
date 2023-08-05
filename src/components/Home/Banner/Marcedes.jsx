import React from "react";

const Marcedes = () => {
  const imageUrl = "https://i.ibb.co/94D70S6/Marceds-benz-a.jpg";
  const imageUrl2 = "https://i.ibb.co/6PGmR0f/Marceds-benz-m.jpg";

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
        className="absolute left-0 w-full h-full text-white"
        style={{ fontFamily: "Gotham, sans-serif" }}
      >
        <p className="vtitle font-bold">
          Marcedese Benz
        </p>
        <p className="underline mt-1 sm:mt-2 md:mt-6 lg:mt-8 font-semibold">
          Explore Details
        </p>
      </div>
    </div>
  );
};

export default Marcedes;
