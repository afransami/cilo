import React from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import SwipperSliderNew from "../Swiper/swipperSliderNew";
import HomePage from "./HomePage ";

const Home = () => {
  return (
    <div className="lg:mt-12 mt-6">
      {/* <HomePage></HomePage>       */}
      <Banner></Banner>
      <div className="mt-10">
        <SwipperSliderNew></SwipperSliderNew>
        <div
          className=" mt-4 mx-auto container "
          style={{ borderBottom: "1px solid lightgray" }}
        ></div>
      </div>
      <div className="mt-8">
        <Card></Card>
      </div>
    </div>
  );
};

export default Home;
