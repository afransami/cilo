import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styless.css";
import { Pagination, Navigation } from "swiper/modules";
import { Link, useParams } from "react-router-dom";
import Modal from "../Utils/Modal/Modal";
import ArrowUp from "../Utils/ArrowUp/ArrowUp";
import { IoIosAlert } from "react-icons/Io";
import ToggleSwitch from "../Utils/TwoButton/ToggleButtons";
import App from "../Utils/FeaturedButton/App";




const ProductDetails = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = (input) => {
    // alert(`Confirmed: ${input}`);
    `Confirmed: ${input}`;
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
    fetch("/BannerData.json")
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
    return <div className="lg:mt-12 mt-6">Loading...</div>;
  }

  return (
    <div className="">
      <div className="grid lg:grid-cols-8 grid-cols-1 lg:mt-12 mt-6 lg:fixed lg:top-0 lg:left-0">
        <div style={{ position: "relative" }} className="col-span-6 min-w-0 ">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            navigation={false} // Disable default navigation
            modules={[Pagination, Navigation]} // Add both Pagination and Navigation modules
            className="mySwiper "
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2.2,
              },
            }}
          >
            <SwiperSlide className="min-w-full h-screen ">
              <div className="relative ">
                <img
                  src={product.imageLg}
                  alt="Your Image"
                  className="w-full"
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
          <div
            className="rounded-t-lg lg:flex items-center cursor-pointer lg:w-1/4 w-full justify-center lg:gap-6 gap-2 bg-gray-200  py-4 lg:left-[40%] lg:-translate-x-[45%] "
            style={{
              position: "fixed",
              bottom: "0%",
              // transform: "translateX(-50%)",
              zIndex: 1,
            }}
          >
            <div className="flex items-center justify-center lg:gap-8 gap-4 text-gray-500">
              <ArrowUp></ArrowUp>
              <div className="flex gap-2 items-center justify-between">
                <p>$ {product.price.starting_price} Starting</p>
                <span className="divider divider-horizontal"></span>
                <p>$ {product.price.max_price} Max </p>
              </div>
            </div>
          </div>
          
        </div>

        <div className="col-span-2 h-screen overflow-scroll px-2 min-w-full bg-white">
          <div className="flex flex-col items-center justify-center">
            <p className="vtitle font-bold flex items-center justify-center pt-[20%] ">
              {product.name}
            </p>
            <p
              className="mt-4 text-gray-500 text-md"
              style={{ letterSpacing: `6px` }}
            >
              {product.manufacturer}
            </p>
            <div className="p-8">
              <p
                className="px-4 py-2 cursor-pointer underline rounded flex items-center justify-center gap-2"
                onClick={handleModalOpen}
              >
                <span>
                  <IoIosAlert className="text-2xl text-primary"></IoIosAlert>
                </span>{" "}
                Enter Delivery ZIP Code
              </p>
              <Modal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onConfirm={handleConfirm}
              />
            </div>
          </div>

          <ToggleSwitch></ToggleSwitch>
          <br />

          <div>
            <br />
            <div className="flex items-center justify-between flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-2xl font-bold">
                  {product.performance.fuel_economy?.city}
                  <small className="text-xs"> mpg city</small>
                </span>
                <br />
                <span className="text-2xl font-bold">
                  {product.performance.fuel_economy?.highway}
                  <small className="text-xs"> mpg highway</small>
                </span>
                <br />
                <span className="text-2xl font-bold">
                  {product.performance.fuel_economy?.combined}
                  <small className="text-xs"> mpg combined</small>
                </span>
              </div>
              <p className="text-center">Range (EPA est.)</p>
              <div className="flex items-center justify-between gap-8">
                <div>
                  <p className="text-2xl font-bold">
                    {product.performance.top_speed}{" "}
                    <small className="text-xs"> mph</small>
                  </p>
                  <p>Top Speed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {product.performance.zero_to_60mph}
                    <small className="text-xs"> sec</small>
                  </p>
                  <p>0_to_60mph</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="flex items-center justify-start gap-4 text-[16px] mb-2">
            <p>{product.transmission.type}</p>
            <p>{product.transmission.drive_type}</p>
          </div>
          <div className="flex items-center justify-center text-[16px] font-semibold">
            <button className="flex items-center justify-between gap-10 border-4 rounded-md border-[#3e6ae1] px-4 py-4 w-full">
              <span>{product.name}</span>
              <span>{product.price.starting_price}</span>
            </button>
          </div><br />
          <div className="text-sm text-center">
          All prices are shown without potential incentives or gas savings of $6,600.<span className="underline"><Link className="text-sm">Learn More</Link></span>
          </div><br />

          <App></App>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit error
            facere similique? Ullam veritatis rerum quibusdam, unde doloremque
            in quam eius, soluta assumenda perspiciatis adipisci aperiam tenetur
            omnis delectus magni.
          </p>
         
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetails;
