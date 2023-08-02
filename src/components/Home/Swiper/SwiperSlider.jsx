import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

const SwiperSlider = () => {
  const imageUrl1 = "https://i.ibb.co/bzL2vr3/pngwing-1-removebg-preview-1.png";
  const imageUrl2 = "https://i.ibb.co/xXmgWJr/pngwing-2.png";

  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >     

        <SwiperSlide>
          <div className="relative w-full pt-20 bg-[#F4F4F4]">
            <img src={imageUrl1} alt="Your Image" className="w-full h-auto" />
            <div className="absolute left-0 w-full h-full flex flex-col justify-center items-center -top-[110px] md:-top-52  lg:-top-[170px] xl:-top-[230px]">
              <p className=" text-sm sm:text-lg md:text-2xl lg:text-4xl font-Montserrat">
                Toyota Fortuner
              </p>
              <p className="text-lg font-Montserrat underline">Explore Details</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full pt-20 bg-[#F4F4F4]">
            <img src={imageUrl2} alt="Your Image" className="w-full h-auto" />
            <div className="absolute left-0 w-full h-full flex flex-col justify-center items-center -top-[110px] md:-top-52  lg:-top-[170px] xl:-top-[230px]">
              <p className=" text-sm sm:text-lg md:text-2xl lg:text-4xl font-Montserrat">
                Marcedes Benz-A
              </p>
              <p className="text-lg font-Montserrat underline">Explore Details</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full pt-20 bg-[#F4F4F4]">
            <img src={imageUrl1} alt="Your Image" className="w-full h-auto" />
            <div className="absolute left-0 w-full h-full flex flex-col justify-center items-center -top-[110px] md:-top-52  lg:-top-[170px] xl:-top-[230px]">
              <p className=" text-sm sm:text-lg md:text-2xl lg:text-4xl font-Montserrat">
                Toyota Fortuner
              </p>
              <p className="text-lg font-Montserrat underline">Explore Details</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full pt-20 bg-[#F4F4F4]">
            <img src={imageUrl2} alt="Your Image" className="w-full h-auto" />
            <div className="absolute left-0 w-full h-full flex flex-col justify-center items-center -top-[110px] md:-top-52  lg:-top-[170px] xl:-top-[230px]">
              <p className=" text-sm sm:text-lg md:text-2xl lg:text-4xl font-Montserrat">
                Marcedes Benz-A
              </p>
              <p className="text-lg font-Montserrat underline">Explore Details</p>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default SwiperSlider;
