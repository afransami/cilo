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
      <footer className="footer  items-center align-text-top justify-center p-5  text-base-content">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-24 justify-between items-center mt-5">
          <div className="grid lg:grid-cols-1 gap-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
              <div className="flex flex-row items-center justify-between gap-14">
                <div
                  className="flex flex-row items-start justify-between gap-14 text-[16px]"
                  style={{ fontFamily: "Gotham, sans-serif" }}
                >
                  <div className="flex flex-col items-start justify-between gap-2">
                    <span className="text-[18px] font-semibold text-black">
                      Service
                    </span>
                    <a className="link link-hover">Contact us</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Gifting</a>
                  </div>

                  <p class="w-[1px] h-32 bg-gray-400 md:block hidden"></p>
                </div>

                <div
                  className="flex flex-row items-start justify-between gap-14 text-[16px]"
                  style={{ fontFamily: "Gotham, sans-serif" }}
                >
                  <div className="flex flex-col items-start justify-between gap-2">
                    <span className="text-[18px] font-semibold text-black">
                      Orders
                    </span>
                    <a className="link link-hover">Shipping</a>
                    <a className="link link-hover">Returns & Exchange</a>
                    <a className="link link-hover">Offer</a>
                  </div>

                  <p class="w-[1px] h-32 bg-gray-400 md:block hidden"></p>
                </div>
              </div>

              <div style={{ fontFamily: "Gotham, sans-serif" }}>
                <span className="text-[17px] text-black">
                  SUBSCRIBE TO OUR NEWSLETTER
                </span>
                <div className="form-control w-80 lg:w-full">
                  <label className="label">
                    <span className="label-text text-sm">
                      Want exclusive offers and first access to products? Sign
                      up for email alerts
                    </span>
                  </label>

                  <div className="join">
                    <input
                      className="input input-bordered join-item"
                      placeholder="Enter the Email"
                    />
                    <button className="btn join-item bg-[#313132] text-white" style={{ fontFamily: "Gotham, sans-serif" }}>
                      Subscribe
                    </button>
                  </div>
                  {/* <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter the Email"
                    className="input input-bordered w-full pr-16 rounded-none"
                  />
                  <button className="btn bg-[#313132] text-white absolute top-0 right-0  rounded-l-none rounded-none">
                    Subscribe
                  </button>
                </div> */}
                  <p>
                    Click Here to read New Look{" "}
                    <span>
                      <Link to="/">privacy notice</Link>
                    </span>{" "}
                    or{" "}
                    <span>
                      <Link to="/">contact us</Link>
                    </span>
                  </p>
                </div>
              </div>
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
              className="transition hover:text-indigo-600"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebookSquare className="text-4xl "></FaFacebookSquare>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="transition hover:text-info"
            >
              <span className="sr-only ">Twitter</span>
              <FaTwitterSquare className="text-4xl"></FaTwitterSquare>
            </a>
          </li>
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="transition hover:bg-pink-600"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagramSquare className="text-4xl hover:bg-pink-600"></FaInstagramSquare>
            </a>
          </li>
          <li>
            <a href="/" rel="noreferrer" target="_blank" className="transition">
              <img className="w-22" src={pinterest} alt="" />
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="transition hover:bg-red-600"
            >
              <span className="sr-only">Youtube</span>
              <FaYoutubeSquare className="text-4xl hover:bg-red-600"></FaYoutubeSquare>
            </a>
          </li>
        </ul>

        <div className="divider"></div>
      </div>
      <div>
        <div
          className="lg:flex items-center justify-center gap-8 text-xs text-center"
          style={{ fontFamily: "Gotham, sans-serif" }}
        >
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
          <p className="font-Poopin flex items-center justify-center text-sm md:text-md text-center">
            Copyright © 2023 New Look. ll All rights reserved. Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
