import React from "react";
import './styles.css';

const HomePage = () => {

    const imageUrl1 = "https://i.ibb.co/v1K4Mhr/Rectangle-2.png";
    const imageUrl2 = "https://i.ibb.co/tcZqyBh/Rectangle-2-1.png";
    const imageUrl3 = "https://i.ibb.co/94D70S6/Marceds-benz-a.jpg";
    const imageUrl4 = "https://i.ibb.co/6PGmR0f/Marceds-benz-m.jpg";
    const imageUrl5 = "https://i.ibb.co/BzsGGLM/Rectangle-4.png";
    const imageUrl6 = "https://i.ibb.co/bH7LxWB/Rectangle-1448.png";


//   const imageUrl1 = "https://i.ibb.co/v1K4Mhr/Rectangle-2.png";
//   const imageUrl2 = "https://i.ibb.co/1vf9258/Rectangle-3.png";
//   const imageUrl3 = 'https://i.ibb.co/BzsGGLM/Rectangle-4.png';
//   const imageUrl4 = 'https://i.ibb.co/bH7LxWB/Rectangle-1448.png';

  return (
    <div className="scroll-container">
      <div className="relative w-full section">
      <img
          src={imageUrl1}
          alt="Your Image"
          className="w-full h-auto bg-cover object-contain"
        />
        {/* <img
          src={imageUrl2}
          alt="Your Image"
          className="hidden w-full h-auto bg-cover object-contain"
        /> */}

        <div className="absolute left-0 w-full h-full" style={{ fontFamily: 'Gotham, sans-serif' }}>
      
        <p className=" text-[15px] sm:text-base md:text-xl lg:text-4xl font-bold">
            Rolls Royce-Pantom
          </p>
          <p className="underline mt-1 sm:mt-2 md:mt-6 lg:mt-8 font-semibold">
            Explore Details
          </p>
        </div>
      </div>

      <div className="section relative w-full">
      <img
        src={imageUrl3}
        alt="Your Image"
        className="w-full h-auto"
      />
      {/* <img
        src={imageUrl4}
        alt="Your Image"
        className="hidden w-full h-auto"
      /> */}
      <div className="absolute left-0 w-full h-full  text-white" style={{ fontFamily: 'Gotham, sans-serif' }}>
   
      <p className=" text-[15px] sm:text-base md:text-xl lg:text-4xl font-bold">
          Marcedese Benz
        </p>
        <p className="underline mt-1 sm:mt-2 md:mt-6 lg:mt-8 font-semibold">
          Explore Details
        </p>
      </div>
    </div>

    <div className="section relative w-full">
    <img
        src={imageUrl5}
        alt="Your Image"
        className="w-full h-auto"
      />
      {/* <img
        src={imageUrl6}
        alt="Your Image"
        className="hidden w-full h-auto"
      /> */}
   
        <div className="absolute left-0 w-full h-full " style={{ fontFamily: 'Gotham, sans-serif' }}>
    
        <p className=" text-[15px] sm:text-base md:text-xl lg:text-4xl font-bold">
          Range Rover
        </p>
        <p className="underline mt-1 sm:mt-2 md:mt-6 lg:mt-8 font-semibold">
          Explore Details
        </p>      
        </div>
      </div>
    </div>
  );
};

export default HomePage;
