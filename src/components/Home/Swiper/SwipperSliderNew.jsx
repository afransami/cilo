import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const SwipperSliderNew = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const imageUrl1 = "https://i.ibb.co/NsptGDG/Rectangle-6-2.png";
  const imageUrl2 = "https://i.ibb.co/MnVJYzR/Rectangle-6-2.png";
  const imageUrl3 = "https://i.ibb.co/my74Q22/Rectangle-6-2.png";

  return (
    <div className="mx-auto container" style={{ position: "relative" }}>
      <Swiper
        ref={swiperRef}
        slidesPerView={2.2}
        spaceBetween={20}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={false} // Disable default navigation
        modules={[Pagination, Navigation]} // Add both Pagination and Navigation modules
        className="mySwiper"
        breakpoints={{          
          320: {
            slidesPerView: 1,
          },
          // Set 2.5 slides per view for larger screens (adjust as needed)
          768: {
            slidesPerView: 2.2,
          },
        }}
      >
        <SwiperSlide className="mb-8">
          <div className="relative w-full">
            <img src={imageUrl1} alt="Your Image" className="w-full h-auto"/>
            <div
              className="absolute left-0 w-full h-full flex flex-col justify-center items-center"
              style={{ fontFamily: "Gotham, sans-serif" }}
            >
              <p className="vtitle font-bold">
                Toyota Fortuner
              </p>
              <p className="underline">
                Explore Details
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="relative w-full">
            <img src={imageUrl2} alt="Your Image" className="w-full h-auto" />

            <div
              className="absolute left-0 w-full h-full flex flex-col justify-center items-center"
              style={{ fontFamily: "Gotham, sans-serif" }}
            >
               <p className="vtitle font-bold">
                Marcedes Benz-A
              </p>
              <p className="underline">
                Explore Details
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="relative w-full">
            <img src={imageUrl3} alt="Your Image" className="w-full h-auto" />

            <div
              className="absolute left-0 w-full h-full flex flex-col justify-center items-center"
              style={{ fontFamily: "Gotham, sans-serif" }}
            >
              <p className="vtitle font-bold">
                Huyundai Santa
              </p>
              <p className="underline">
                Explore Details
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="relative w-full">
            <img src={imageUrl3} alt="Your Image" className="w-full h-auto" />

            <div
              className="absolute left-0 w-full h-full flex flex-col justify-center items-center"
              style={{ fontFamily: "Gotham, sans-serif" }}
            >
              <p className="vtitle font-bold">
                Huyundai Santa
              </p>
              <p className="underline">
                Explore Details
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="relative w-full">
            <img src={imageUrl3} alt="Your Image" className="w-full h-auto" />

            <div
              className="absolute left-0 w-full h-full flex flex-col justify-center items-center"
              style={{ fontFamily: "Gotham, sans-serif" }}
            >
              <p className="vtitle font-bold">
                Huyundai Santa
              </p>
              <p className="underline">
                Explore Details
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 1, // Set a higher z-index to place it in front of slides
        }}
      >
        <button
          className="btn bg-black text-white btn-square rounded-none btn-sm mr-2"
          onClick={goPrev}
        >
          ❮
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 1, // Set a higher z-index to place it in front of slides
        }}
      >
        <button
          className="btn bg-black text-white btn-square rounded-none btn-sm mr-2"
          onClick={goNext}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default SwipperSliderNew;