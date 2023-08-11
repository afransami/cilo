
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SlideStyles.css";
import { Navigation } from 'swiper/modules';

const SwiperSlideModal = ({ isOpen, onClose }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/BannerData.json")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log(cards);
  }, []);
  

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

  
  return (
    <div
      className={`fixed inset-0  flex items-center justify-center backdrop-blur-sm z-50 bg-gray-900 bg-opacity-60 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="inset-0 bg-black bg-opacity-50"></div>
      <div className=" relative bg-white rounded-lg p-6 max-w-4xl h-auto">
        <button
          className="absolute top-0 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Swiper 
        ref={swiperRef}
        slidesPerView={1}                
        spaceBetween={20} 
        grabCursor={true}       
        navigation={false}
        modules={[Navigation]}  
        className="mySwiper" >
          
          <SwiperSlide >
           <div>
           <p>performance</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            nostrum eum! Pariatur repellendus, dicta alias ut similique facere
            fuga dolores quod porro et commodi earum ipsa dolor eius quibusdam
            voluptate placeat aspernatur totam dignissimos recusandae! Vel
            sapiente maxime sed assumenda quasi architecto ab illo illum nisi
            laborum harum hic, vero deleniti itaque labore sunt! Consequatur,
            eum ipsum quo quibusdam
            fuga dolores quod porro et commodi earum ipsa dolor eius quibusdam
            voluptate placeat aspernatur totam dignissimos recusandae! Vel
            sapiente maxime sed assumenda quasi architecto ab illo illum nisi
            laborum harum hic, vero deleniti itaque labore sunt! Consequatur,
            eum ipsum quo quibusdam
            fuga dolores quod porro et commodi earum ipsa dolor eius quibusdam
            voluptate placeat aspernatur totam dignissimos recusandae! Vel
            sapiente maxime sed assumenda quasi architecto ab illo illum nisi
            laborum harum hic, vero deleniti itaque labore sunt! Consequatur,
            eum ipsum quo quibusdam
            fuga dolores quod porro et commodi earum ipsa dolor eius quibusdam
            voluptate placeat aspernatur totam dignissimos recusandae! Vel
            sapiente maxime sed assumenda quasi architecto ab illo illum nisi
            laborum harum hic, vero deleniti itaque labore sunt! Consequatur,
            eum ipsum quo quibusdam</p>
           </div>
          </SwiperSlide>
          <SwiperSlide>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            nostrum eum! Pariatur repellendus, dicta alias ut similique facere
            fuga dolores quod porro et commodi earum ipsa dolor eius quibusdam
            voluptate placeat aspernatur totam dignissimos recusandae! Vel
            sapiente maxime sed assumenda quasi architecto ab illo illum nisi
            laborum harum hic, vero deleniti itaque labore sunt! Consequatur,
            eum ipsum quo quibusdam{" "}
          </SwiperSlide>
          <SwiperSlide>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            nostrum eum! Pariatur repellendus, dicta alias ut similique facere
            fuga dolores quod porro et commodi earum ipsa dolor eius quibusdam
            voluptate placeat aspernatur totam dignissimos recusandae! Vel
            sapiente maxime sed assumenda quasi architecto ab illo illum nisi
            laborum harum hic, vero deleniti itaque labore sunt! Consequatur,
            eum ipsum quo quibusdam{" "}
          </SwiperSlide>
          

          {/* Add more slides as needed */}
        </Swiper>
        <div
            style={{
              position: "absolute",
              top: "50%",
              left: "5px",
              transform: "translateY(-50%)",
              zIndex: 1, 
            }}
          >
            <button
              className="text-black rounded-md text-[20px] ml-3 btn btn-sm "
              onClick={goPrev}
            >
              ❮
            </button>
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "5px",
              transform: "translateY(-50%)",
              zIndex: 1, 
            }}
          >
            <button
              className="text-black text-[20px] mr-3 btn btn-sm rounded-md"
              onClick={goNext}
            >
              ❯
            </button>
          </div> 
      
      </div>
    </div>
  );
};

export default SwiperSlideModal;
