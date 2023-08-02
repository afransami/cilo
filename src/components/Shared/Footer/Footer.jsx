import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import pinterest from "../../../assets/Group 128.svg";

const Footer = () => {
  return (
    <div className="bg-[#F8F7F7]">

      <footer className="footer  items-center align-text-top justify-center p-10  text-base-content">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-row items-center justify-between gap-8">
         
         <div className="font-Montserrat flex flex-col items-start justify-between ">
           <span className="text-[15px] font-semibold text-black">
             Services
           </span>
           <a className="link link-hover">Contact us</a>
           <a className="link link-hover">FAQ</a>
           <a className="link link-hover">Gifting</a>
         </div>

         <p class="w-[2px] h-32 bg-black md:block hidden"></p>

         <div className="font-Montserrat flex flex-col items-start justify-between">
           <span className="text-[15px] font-semibold text-black">Order</span>
           <a className="link link-hover">Shipping</a>
           <a className="link link-hover">Returns & Exchange</a>
           <a className="link link-hover">Offer</a>
         </div>
         <p class="w-[2px] h-32 bg-black md:block hidden"></p>
       
       </div>

       <div className="font-Montserrat">
         <span className="text-[15px] font-semibold text-black ">
           SUBSCRIBE TO OUR NEWSLETTER
         </span>
         <div className="form-control w-80 lg:w-full font-Montserrat">
           <label className="label">
             <span className="label-text text-sm font-Montserrat">
               Want exclusive offers and first access to products? Sign up for
               email alerts
             </span>
           </label>
           <div className="relative">
             <input
               type="text"
               placeholder="Enter the Email"
               className="input input-bordered w-full pr-16 rounded-none"
             />
             <button className="btn bg-[#313132] text-white absolute top-0 right-0  rounded-l-none rounded-none font-Montserrat">
               Subscribe
             </button>
           </div>
           <p className="font-Montserrat">
             Click Here to read New Look{" "}
             <span>
               <Link to="/" className="font-Montserrat">
                 privacy notice
               </Link>
             </span>{" "}
             or{" "}
             <span>
               <Link to="/" className="font-Montserrat">
                 contact us
               </Link>
             </span>
           </p>
         </div>
       </div>
        </div>
        
      </footer>

      <div>
        <div className="divider"></div>
        <ul className="flex justify-center items-center gap-6 mt-0 ">
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="transition hover:text-teal-700/75"
            >
              <span className="sr-only font-Poppin">Facebook</span>
              <FaFacebookSquare className="text-4xl"></FaFacebookSquare>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="transition hover:text-teal-700/75"
            >
              <span className="sr-only font-Poppin">Twitter</span>
              <FaTwitterSquare className="text-4xl"></FaTwitterSquare>
            </a>
          </li>
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="transition hover:text-teal-700/75"
            >
              <span className="sr-only font-Poppin">Instagram</span>
              <FaInstagramSquare className="text-4xl"></FaInstagramSquare>
            </a>
          </li>
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="transition hover:text-teal-700/75"
            >
              <img className="w-22" src={pinterest} alt="" />
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="transition hover:text-teal-700/75"
            >
              <span className="sr-only font-Poppin">Instagram</span>
              <FaYoutubeSquare className="text-4xl"></FaYoutubeSquare>
            </a>
          </li>
        </ul>

        <div className="divider"></div>
      </div>
      <div>
        <div className="lg:flex items-center justify-center gap-8 text-xs text-center font-Montserrat">
          <p className="text-[#3D3D3D] font-Poopin">Privacy Policy</p>
          <span className="divider divider-horizontal"></span>
          <p className="font-Poopin">Terms of Use</p>
          <span className="divider divider-horizontal"></span>
          <p className="font-Poopin">Sales and Refunds</p>
          <span className="divider divider-horizontal"></span>
          <p className="font-Poopin">Legal</p>
          <span className="divider divider-horizontal"></span>
          <p className="font-Poopin">Site Map</p>
        </div>
        <br />
        <div>
          <p className="font-Poopin flex items-center justify-center font-Montserrat text-sm md:text-md text-center">
            Copyright © 2023 New Look. ll All rights reserved. Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
