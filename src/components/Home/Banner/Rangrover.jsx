import React from 'react';

const Rangrover = () => {
    const imageUrl = 'https://i.ibb.co/BzsGGLM/Rectangle-4.png';
    return (
        <div className="relative w-full">
        <img src={imageUrl} alt="Your Image" className="w-full h-auto" />
        <div className="absolute left-0 w-full h-full flex flex-col justify-center items-center   -top-[70px] md:-top-32  lg:-top-[170px] xl:-top-[280px]">
          <p className=" text-sm sm:text-lg md:text-2xl lg:text-4xl">Range Rover</p>
          <p className="text-xs underline">Explore Details</p>          
        </div>
      </div>

    );
};

export default Rangrover;