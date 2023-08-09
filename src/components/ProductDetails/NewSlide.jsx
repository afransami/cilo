import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styless.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const NewSlide = () => {
  return (
    <>
      <button className="btn" onClick={() => window.my_modal_3.showModal()}>
        open modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              eos dolorem, voluptate, illum illo quisquam officiis, atque
              eveniet quae porro tempore vitae quod temporibus architecto labore
              eaque quasi magni soluta?
            </SwiperSlide>
            <SwiperSlide>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              eos dolorem, voluptate, illum illo quisquam officiis, atque
              eveniet quae porro tempore vitae quod temporibus architecto labore
              eaque quasi magni soluta?
            </SwiperSlide>
            <SwiperSlide>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              eos dolorem, voluptate, illum illo quisquam officiis, atque
              eveniet quae porro tempore vitae quod temporibus architecto labore
              eaque quasi magni soluta?
            </SwiperSlide>
          </Swiper>
        </form>
      </dialog>
    </>
  );
};

export default NewSlide;
