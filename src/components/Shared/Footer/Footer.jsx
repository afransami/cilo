import React from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
<footer className="footer flex items-center justify-around p-10 bg-base-200 text-base-content">

  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Contact us</a> 
    <a className="link link-hover">FAQ</a> 
    <a className="link link-hover">Gifting</a>     
  </div> 
  {/* <div className="divider lg:divider-horizontal"></div>  */}
  <div className="border-t border-gray-900 my-4"></div>
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 

  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>

</footer>






      {/* <footer className="bg-[#f5f5f7]">
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
      </footer> */}
    </div>
  );
};

export default Footer;
