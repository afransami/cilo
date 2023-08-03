import React from 'react';

const Rangrover = () => {
    const imageUrl = 'https://i.ibb.co/BzsGGLM/Rectangle-4.png';
    return (
        <div className="relative w-full">
        <img src={imageUrl} alt="Your Image" className="w-full h-auto" />
        <div className="absolute left-0 w-full h-full " style={{ fontFamily: 'Gotham, sans-serif' }}>
        {/* <div className="absolute left-0 w-full h-full flex flex-col justify-center items-center   -top-[75px] md:-top-32  lg:-top-[170px] xl:-top-[290px]" style={{ fontFamily: 'Gotham, sans-serif' }}> */}
        <p className=" text-[15px sm:text-base md:text-xl lg:text-4xl font-bold">Range Rover</p>
        <p className=" text-[13px] underline mt-1 sm:mt-2 md:mt-6 lg:mt-8">Explore Details</p>      
        </div>
      </div>

    );
};

export default Rangrover;