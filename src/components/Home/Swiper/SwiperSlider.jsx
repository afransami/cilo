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
import { Keyboard, Navigation, Pagination } from "swiper/modules";

const SwiperSlider = () => {
  const imageUrl1 = "https://i.ibb.co/NsptGDG/Rectangle-6-2.png";
  const imageUrl2 = "https://i.ibb.co/MnVJYzR/Rectangle-6-2.png";
  const imageUrl3 = "https://i.ibb.co/my74Q22/Rectangle-6-2.png";

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={false}
        slidesPerGroupSkip={2}
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
        scrollbar={false}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="mb-8">
          <div id="slide1" className="relative w-full pt-20">
            <img src={imageUrl1} alt="Your Image" className="w-full h-auto" />
            <div
              className="absolute left-0 w-full h-full flex flex-col justify-center items-center   -top-[80px] sm:-top-52 lg:-top-[130px] xl:-top-[230px]"
              style={{ fontFamily: "Gotham, sans-serif" }}
            >
              <p className=" text-lg sm:text-base md:text-2xl lg:text-4xl font-bold">
                Toyota Fortuner
              </p>
              <p className=" text-[14px] underline mt-4 sm:mt-2 md:mt-6 lg:mt-8">
                Explore Details
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="mb-8">
          <div id="slide2" className="relative w-full pt-20">
            <img src={imageUrl2} alt="Your Image" className="w-full h-auto" />

            <div
              className="absolute left-0 w-full h-full flex flex-col justify-center items-center   -top-[80px] sm:-top-52 lg:-top-[130px] xl:-top-[230px]"
              style={{ fontFamily: "Gotham, sans-serif" }}
            >
              <p className=" text-lg sm:text-base md:text-2xl lg:text-4xl font-bold">
                Marcedes Benz-A
              </p>
              <p className=" text-[14px] underline mt-4 sm:mt-2 md:mt-6 lg:mt-8">
                Explore Details
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="mb-8">
          <div id="slide3" className="relative w-full pt-20">
            <img src={imageUrl3} alt="Your Image" className="w-full h-auto" />

            <div
              className="absolute left-0 w-full h-full flex flex-col justify-center items-center   -top-[80px] sm:-top-52 lg:-top-[130px] xl:-top-[230px]"
              style={{ fontFamily: "Gotham, sans-serif" }}
            >
              <p className=" text-lg sm:text-base md:text-2xl lg:text-4xl font-bold">
                Huyundai Santa
              </p>
              <p className=" text-[14px] underline mt-4 sm:mt-2 md:mt-6 lg:mt-8">
                Explore Details
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="relative">
        <div className="carousel carousel-center rounded-box gap-4">
          <div id="slide1" className="carousel-item">
            <img className="" src={imageUrl1} alt="Pizza" />
          </div>

          <div className="carousel-item">
            <img src={imageUrl2} alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img src={imageUrl3} alt="Pizza" />
          </div>
        </div>

        
        <div id="slide4" className="absolute flex items-center justify-between">
              <a
                href="#slide4"
                className="absolute btn bg-black text-white btn-square rounded-none btn-sm mr-5"
              >
                ❮
              </a>     
              <a
                href="#slide4"
                className=" btn bg-black text-white btn-square rounded-none btn-sm mr-5"
              >
                ❯
              </a>          
            </div>
      </div> */}
    </>
  );
};

export default SwiperSlider;
