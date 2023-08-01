import React from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#f5f5f7]">
        <div className="hidden lg:block ">
          <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-10 sm:px-6 lg:px-8">
            <div className="mt-10 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
              <p className="text-center text-sm text-gray-500 sm:text-left font-Poopin">
                More ways to trade: Call : +880 1317 68 66 95
              </p>

              <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-teal-700/75"
                  >
                    <span className="sr-only font-Montserrat">Facebook</span>
                    <FaFacebookSquare className="text-xl"></FaFacebookSquare>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-teal-700/75"
                  >
                    <span className="sr-only font-Montserrat">LinkedIn</span>
                    <FaLinkedin className="text-xl"></FaLinkedin>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-teal-700/75"
                  >
                    <span className="sr-only font-Montserrat">Twitter</span>
                    <FaTwitterSquare className="text-xl"></FaTwitterSquare>
                  </a>
                </li>
              </ul>
            </div>
            <span className="divider"></span>

            <div className="flex items-center justify-between text-[#3D3D3D]">
              <div>
                <p className="font-Poopin">Assistant Global Inc.</p>
              </div>

              <div className="flex items-center justify-between gap-8 text-xs">
                <p className="text-[#3D3D3D] font-Poopin">Send Feedback</p>
                <p className="font-Poopin">Privacy</p>
                <p className="font-Poopin">Terms</p>
                <p className="font-Poopin">Disclaimer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden block">
          <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-10 sm:px-6 lg:px-8">
            <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
              <p className="text-center text-sm text-gray-500 sm:text-left font-Poopin">
                Contact : +880 1407 04 78 58
              </p>

              <ul className="flex justify-center items-center gap-6 mt-0 ">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-teal-700/75"
                  >
                    <span className="sr-only font-Poopin">Facebook</span>
                    <FaFacebookSquare className="text-xl"></FaFacebookSquare>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-teal-700/75"
                  >
                    <span className="sr-only font-Poopin">LinkedIn</span>
                    <FaLinkedin className="text-xl"></FaLinkedin>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-teal-700/75"
                  >
                    <span className="sr-only font-Poopin">Twitter</span>
                    <FaTwitterSquare className="text-xl"></FaTwitterSquare>
                  </a>
                </li>
              </ul>
            </div>
            <span className="divider"></span>

            <div className="flex flex-col-reverse items-center justify-between text-[#3D3D3D]">
              <div>
                <p className="font-Poopin">Assistant Global Inc.</p>
              </div>

              <div className="flex items-center justify-between gap-8 mb-2 text-xs">
                <p className="font-Poopin">Privacy</p>{" "}
                <span className="divider divider-horizontal"></span>
                <p className="font-Poopin">Terms</p>{" "}
                <span className="divider divider-horizontal"></span>
                <p className="font-Poopin">Disclaimer</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
