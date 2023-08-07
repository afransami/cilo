import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("/productDetails/");

  return (
    <div>
      <div className="">
      <Navbar></Navbar>
      </div>
      {/* <div className="min-h-[calc(100vh-380px)]"> */}
      <div className="">
        <Outlet></Outlet>
      </div>
      <div className="bg-[#F8F7F7] mb-10 mt-8">
      { noHeaderFooter || <Footer></Footer>}
      </div>
    </div>
  );
};

export default Main;
