import React from "react";

const Marcedes = () => {
  const imageUrl = "https://i.ibb.co/1vf9258/Rectangle-3.png";
  return (
    <div className="relative w-full">
      <img src={imageUrl} alt="Your Image" className="w-full h-auto" />
      <div className="absolute left-0 w-full h-full flex flex-col justify-center items-center   -top-[70px] md:-top-32  lg:-top-[170px] xl:-top-[230px]">
        <p className="text-white text-sm sm:text-lg md:text-2xl lg:text-4xl">
          Marcedese Benz
        </p>
        <p className="text-white text-xs underline">Explore Details</p>
      </div>
    </div>

    // <div>
    //         <div className='relative w-full aspect-w-16 aspect-h-9'>
    //         <div>
    //         <img className='object-contain w-full h-auto' src="https://i.ibb.co/1vf9258/Rectangle-3.png" alt="" />
    //         </div>
    //         <div className=' absolute top-2 left-[40%] md:top-8 md:lef-[50%] lg:top-22 lg:left-[40%] sm:text-base md:text-lg lg:text-2xl text-md flex flex-col items-center justify-center text-white'>
    //         <p className='font-bold'>Marcedese Benz</p>
    //         <small className='underline'>Explore Details</small>
    //         </div>
    //     </div>
    //     </div>
  );
};

export default Marcedes;
