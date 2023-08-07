import React, { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { RiEqualLine } from "react-icons/ri";

import { MdClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../../../assets/image 1.svg";



const Navbar = () => {
  const [navColor, setNavColor] = useState("#313132");

  const listenScrollEvent = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768) {
      // Change 768 to the breakpoint where you want to apply the color change
      window.scrollY > 10 ? setNavColor("#2727277F") : setNavColor("#313132");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <nav className="bg-[#313132] z-3 fixed top-0 left-0 right-0 z-10">
    <nav className="fixed top-0 left-0 right-0 z-10">
      <div
        className=""
        style={{
          backgroundColor: navColor,
          transition: "all 1s",
        }}
      >
        <div className="md:flex items-center justify-center lg:h-14 h-12">
          <div className="">
            <div className="hidden md:block">
              <ul
                className="flex items-center justify-center gap-10 px-0 lg:gap-20 text-white "
                style={{ fontFamily: "Gotham, sans-serif" }}
              >
                <li className=" hover:text-gray-900 cursor-pointer hidden md:block">
                  <a href="/"><img className="w-[70px]" src={Logo} alt="" /></a>
                </li>
                <Link to="company">
                  <li className=" hover:text-gray-400 cursor-pointer text-[16px]">
                    Company
                  </li>
                </Link>
                <Link to="brand-new">
                  <li className="hover:text-gray-400 cursor-pointer text-[16px]">
                    Brand New
                  </li>
                </Link>
                <Link to="recondintion">
                  <li className="hover:text-gray-400 cursor-pointer text-[16px]">
                    Recondition
                  </li>
                </Link>
                <Link to="e-garage">
                  <li className="hover:text-gray-400 cursor-pointer text-[16px]">
                    e-Garage
                  </li>
                </Link>
                <Link to="contact">
                  <li className="hover:text-gray-400 cursor-pointer text-[16px]">
                    Contact
                  </li>
                </Link>
                <li className=" hover:text-gray-400 cursor-pointer">
                  <FiSearch className="text-xl text-white"></FiSearch>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center md:hidden px-4 pt-3">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md text-gray-300 hover:text-white "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <RiEqualLine
                className={`${isOpen ? "hidden" : "block"} h-6 w-6 text-white`}
              ></RiEqualLine>

              <MdClose
                className={`${isOpen ? "block" : "hidden"} h-6 w-6 text-white`}
              ></MdClose>
            </button>

            <Link to="/">
              <img className="w-10 cursor-pointer" src={Logo} alt="" />
            </Link>

            <ul>
              <li className="text-white cursor-pointer">
                <FiSearch className="text-lg text-white"></FiSearch>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div
          className="bg-[#313132] px-4 pt-6 pb-8 space-y-8 flex flex-col"
          style={{ fontFamily: "Gotham, sans-serif" }}
        >
          <Link className=" text-gray-100 hover:text-gray-500 cursor-pointer">
            Company
          </Link>
          <Link className=" text-gray-100 hover:text-gray-500 cursor-pointer">
            Brand New
          </Link>
          <Link className="text-gray-100 hover:text-gray-500 cursor-pointer">
            Recondition
          </Link>
          <Link className="text-gray-100 hover:text-gray-500 cursor-pointer">
            e-Garage
          </Link>
          <Link className="text-gray-100 hover:text-gray-500 cursor-pointer">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
