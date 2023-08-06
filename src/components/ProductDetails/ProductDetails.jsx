import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import Modal from "../Utils/Modal/Modal";

const ProductDetails = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = (input) => {
    alert(`Confirmed: ${input}`);
  };

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

  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetch("/src/assets/BannerData.json")
      .then((response) => response.json())
      .then((data) => {
        const productDetails = data.find(
          (item) => item.id === parseInt(productId)
        );
        setProduct(productDetails);
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lg:mt-12 mt-6">
      <div className="w-full grid lg:grid-cols-8 grid-cols-1">
        <div
          style={{ position: "relative" }}
          className="col-span-6 bg-green-300"
        >
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
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
              768: {
                slidesPerView: 2.2,
              },
            }}
          >
            <SwiperSlide className="mb-8 min-w-full">
              <div className="relative w-full">
                <img
                  src={product.imageLg}
                  alt="Your Image"
                  className="w-full h-auto"
                />
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
              right: "10px",
              transform: "translateY(-50%)",
              zIndex: 1, // Set a higher z-index to place it in front of slides
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
        <div className="col-span-2">
          <p className="vtitle font-bold flex items-center justify-center pt-[20%] ">
            {product.name}
          </p>
          <p>{product.manufacturer}</p>
          <div className="p-8">      
      <p
        className="px-4 py-2 cursor-pointer underline rounded"
        onClick={handleModalOpen}
      >
       Enter Delivery ZIP Code
      </p>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirm}
      />
    </div>
          <p>{product.performance.top_speed}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
