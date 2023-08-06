import React from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import SwipperSliderNew from "../Swiper/swipperSliderNew";

const Home = () => {
  return (
    <div className="lg:mt-12 mt-6">
      <Banner></Banner>
      <div className="mt-10">
        <SwipperSliderNew></SwipperSliderNew>
        <div
          className=" mt-4 mx-3 lg:mx-8"
          style={{ borderBottom: "1px solid lightgray" }}
        ></div>
      </div>
      <div className="mt-4 lg:mt-8">
        <Card></Card>
      </div>
    </div>
  );
};

export default Home;
