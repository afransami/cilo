import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";


const SwipperSliderNew = () => {
  const [Slides, setSlides] = useState([]);

  useEffect(() => {    
    fetch ("/SliderData.json")      
      .then ((response) => response.json())
      .then((data) => setSlides(data))
      .catch((error) => console.error("Error fetching data:", error));
      console.log(Slides)
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
    <div style={{ position: "relative" }}>
      <Swiper
        ref={swiperRef}
        slidesPerView={2.2}
        spaceBetween={20}        
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}       
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
        {Slides.map((Slide)=>(
          <SwiperSlide className="mb-8">
          <div key={Slides.id} className="relative w-full">
            <img src={Slide.imageLg} alt="Your Image" className="w-full h-auto"/>
            <div
              className="absolute left-0 w-full h-full flex flex-col justify-center items-center"
              style={{ fontFamily: "Gotham, sans-serif" }}
            >
              <p className="vtitle font-bold">
                {Slide.title}
              </p>
              <p className="underline">
                Explore Details
              </p>
            </div>
          </div>
        </SwiperSlide>
        ))}
  
      </Swiper>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 1, 
        }}
      >
        <button
          className="lg:hidden text-black/50 rounded-none text-[20px] ml-3"
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
          zIndex: 1,
        }}
      >
        <button
          className="lg:hidden text-black/50 rounded-none text-[20px] mr-3"
          onClick={goNext}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default SwipperSliderNew;
