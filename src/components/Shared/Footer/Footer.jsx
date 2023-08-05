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
      <footer className="footer items-center align-text-top justify-center p-5  text-base-content">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-24 justify-between items-center mt-5">
          <div className="grid lg:grid-cols-1 gap-8">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-8">
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

                  <p className="w-[1px] h-32 bg-gray-400 md:block hidden"></p>
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

                  <p className="w-[1px] h-32 bg-gray-400 md:block hidden"></p>
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
                      className="input input-bordered join-item w-full"
                      placeholder="Enter the Email"
                    />
                    <button
                      className="btn join-item hover:bg-gray-700 bg-black text-white"
                      style={{ fontFamily: "Gotham, sans-serif" }}
                    >
                      Subscribe
                    </button>
                  </div>

                  <small>
                    Click Here to read <a href="#">CILO</a>{" "}
                    <span>
                      <Link to="/">privacy notice</Link>
                    </span>{" "}
                    or{" "}
                    <span>
                      <Link to="/">contact us</Link>
                    </span>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div>
        <div
          className="mb-4"
          style={{ borderBottom: "1px solid lightgray" }}
        ></div>
        <ul className="flex justify-center items-center gap-6 mt-0 ">
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="transition hover:text-indigo-600"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebookSquare className="text-4xl hover:rotate-45 hover:scale-110 transition-all"></FaFacebookSquare>
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
              <FaTwitterSquare className="text-4xl hover:rotate-45 hover:scale-110 transition-all"></FaTwitterSquare>
            </a>
          </li>
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="transition "
            >
              <span className="sr-only">Instagram</span>
              <FaInstagramSquare className="text-4xl hover:rotate-45 hover:scale-110 transition-all hover:bg-pink-600"></FaInstagramSquare>
            </a>
          </li>
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="transition "
            >
              <span className="sr-only">Youtube</span>
              <FaYoutubeSquare className="text-4xl hover:rotate-45 hover:scale-110 transition-all hover:bg-red-600"></FaYoutubeSquare>
            </a>
          </li>
        </ul>

        <div
          className="my-4"
          style={{ borderBottom: "1px solid lightgray" }}
        ></div>
      </div>
      <div>
        <div
          className="flex items-start justify-center gap-8 text-[14px] text-center"
          style={{ fontFamily: "Gotham, sans-serif" }}
        >
          <div className="lg:flex items-start justify-center gap-8">
            <p className="">Privacy Policy</p>
            <span className="divider divider-horizontal"></span>
            <p className="">Terms of Use</p>
            <span className="divider divider-horizontal"></span>
            <p className="">Sales and Refunds</p>
          </div>

          <div className="lg:flex items-start justify-center gap-8">
            <span className="divider divider-horizontal"></span>
            <p className="">Legal</p>
            <span className="divider divider-horizontal"></span>
            <p className="">Site Map</p>
          </div>
        </div>
        <br />
        <div>
          <p
            className="flex items-center justify-center text-sm md:text-md text-center"
            style={{ fontFamily: "Gotham, sans-serif" }}
          >
            Copyright © 2023 CILO. ll All rights reserved. Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
