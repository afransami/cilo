import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
        <div className="">
          <Navbar></Navbar>
        </div>
        <div className="min-h-[calc(100vh-380px)]">
          <Outlet></Outlet>
        </div>
        <div className="bg-[#F8F7F7]">
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Main;