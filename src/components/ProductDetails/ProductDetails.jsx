import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styless.css";
import { Pagination, Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import Modal from "../Utils/Modal/Modal";
import ArrowUp from "../Utils/ArrowUp/ArrowUp";
import { IoIosAlert } from "react-icons/Io";
import ToggleSwitch from "../Utils/TwoButton/ToggleButtons";

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

        <div className="col-span-2 h-screen overflow-scroll px-2 min-w-full">
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
            <div>
            {/* {product?.performance.map((item)=>(
              <p key={item.i}>{item.city} {item.highway} {item.combined}</p>
            ))} */}
            
            
            <p>Range (EPA est.)</p>
            </div>
            <div>
            <p>{product.performance.top_speed}</p>
            <p>Range (EPA est.)</p>
            </div>
            <div></div>



          </div>

          <p>{product.performance.top_speed}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at
            minus omnis illo dolores accusamus soluta accusantium, dolore,
            aliquam cupiditate maiores laboriosam blanditiis beatae ab illum!
            Magnam quo possimus dolorem saepe ab ipsum odio illo nobis, dolorum
            excepturi vero aliquid. Non eos, iure deserunt inventore magni nihil
            vitae molestias quis incidunt porro modi odio atque nam, eligendi
            quam maiores laborum quo ratione! Illo quos delectus animi velit
            iure, culpa voluptatem quae fugiat sit, corporis quia sunt aliquid
            unde repellat inventore similique sequi beatae! Tenetur porro
            tempora deleniti laudantium quia illo. Tenetur assumenda reiciendis
            aliquam mollitia illum voluptate eius sapiente sit quo, sequi
            tempore, ea eum quas eos tempora facere obcaecati eveniet nostrum
            aperiam recusandae in fugiat? Minus earum error dicta voluptatibus,
            libero recusandae numquam nisi. Placeat consequatur tempore non,
            rerum velit, dignissimos facilis perferendis sint, incidunt quam
            architecto commodi! Saepe in autem consectetur. Commodi, iure
            libero? Eius labore cupiditate numquam quibusdam, tempora sit
            laborum repellat, sunt veritatis facilis expedita. Repudiandae odio
            dicta eum quos deserunt distinctio porro. Consectetur veniam,
            provident odio excepturi cum optio, vitae vero, nihil fugiat harum
            sint voluptatibus amet tenetur! A, dignissimos! Eius atque non
            aliquid fuga, quis odit nisi reprehenderit temporibus ullam,
            mollitia explicabo dignissimos autem velit nobis, tempora nam quae
            ducimus. Fugiat cupiditate perspiciatis debitis itaque odit sit
            labore soluta inventore, harum consectetur nam aspernatur repellat
            minima nisi dolores dolore quidem fuga cumque quod odio molestias
            accusantium voluptas minus corporis? Facere quam blanditiis,
            perspiciatis totam modi eveniet quod in, quia dolorem tempora
            exercitationem eum facilis tempore possimus voluptas voluptatem amet
            voluptate enim nam magnam explicabo ipsa. Soluta exercitationem sed
            id veritatis expedita odit ducimus corrupti, excepturi corporis quae
            eum dolor temporibus optio, dolorum aliquam quis officia. Vitae
            itaque sunt placeat quibusdam accusamus, iusto similique consectetur
            molestias deserunt, suscipit inventore, nobis autem? Laudantium
            temporibus saepe nemo neque quisquam maxime tempore iure! Ea quam,
            repellendus vel deserunt commodi tenetur velit, est quibusdam ullam
            odio tempore labore incidunt mollitia molestias reprehenderit eius
            quis ipsa repudiandae enim quas, deleniti esse? Sequi animi ratione
            eos architecto, eaque dignissimos quae neque vel, voluptates
            praesentium enim. Quisquam autem labore unde, consequatur maiores
            quam accusamus exercitationem. Doloremque, quaerat iste totam optio
            tempora nemo ratione architecto error corrupti praesentium molestiae
            repudiandae? Nostrum quae ipsa cumque distinctio eos saepe itaque
            suscipit cum officiis ea. Officia distinctio quasi doloribus tempora
            dolore! Quis blanditiis, consequuntur ipsa alias eos reiciendis
            nesciunt magni accusantium animi voluptatum minus quo laborum
            officiis eveniet necessitatibus quae laudantium quidem, neque id in?
            Harum ducimus quae voluptas debitis, tempora vel sint libero
            doloribus accusamus amet nihil perferendis hic architecto dolore
            omnis quisquam officia similique blanditiis. Libero quaerat
            quibusdam commodi soluta deleniti omnis explicabo dolorem assumenda,
            qui distinctio deserunt sit numquam minima tempora, atque recusandae
            non esse, nemo et saepe doloribus sapiente. At dolorum ad accusamus
            quo cumque odit. Unde vero numquam delectus magnam nihil et. Ducimus
            quaerat, sunt illum sint necessitatibus culpa doloribus reiciendis
            amet doloremque cupiditate dolor! Fugiat fuga minus incidunt ipsam
            provident eveniet exercitationem obcaecati ab maiores iste, odio
            aperiam ad maxime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
