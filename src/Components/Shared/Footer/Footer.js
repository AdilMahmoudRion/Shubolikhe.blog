import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../Shared/Images/social/facebook.png";
import twitter from "../../Shared/Images/social/twitter.png";
import linkedin from "../../Shared/Images/social/linkedin.png";
import pinterest from "../../Shared/Images/social/pinterest.png";

const Footer = () => {
  return (
    <>
      <footer class="py-16 px-5  lg:px-52 bg-[#f4f6f8] sm:px-10 ">
        <div class="md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-4">
          <div class="col-span-1 md:col-span-2 lg:col-span-1 mb-6 md:mb-0">
            <a
              href="https://flowbite.com"
              target="_blank"
              class="flex items-center text-4xl font-extrabold"
            >
              <h1 className="text-4xl font-light pb-5 text-center font-semibold text-[#b70038] tracking-wide">
                Shubolikhe.Blog
              </h1>
            </a>
          </div>
          <div className="md:col-span-2 lg:col-span-2">
            <div class="grid md:grid-cols-3 grid-cols-2 md:gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h3 class="mb-6 text-sm font-semibold text-[#222222] uppercase">
                  Tag
                </h3>
                <ul>
                  <li class="mb-2">
                    <Link to="/" class="hover:text-[#b70038] text-[#222222]">
                      Education
                    </Link>
                  </li>
                  <li class="mb-2">
                    <Link to="/" class=" hover:text-[#b70038] text-[#222222]">
                      Lifestyle
                    </Link>
                  </li>
                  <li class="mb-2">
                    <Link to="/" class=" hover:text-[#b70038] text-[#222222]">
                      Nature
                    </Link>
                  </li>
                  <li class="mb-2">
                    <Link to="/" class=" hover:text-[#b70038] text-[#222222]">
                      Travel
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="mb-6 text-sm font-semibold text-[#222222] uppercase ">
                  Navigation
                </h3>
                <ul>
                  <li class="mb-2">
                    <Link to="/" class="hover:text-[#b70038] text-[#222222]">
                      About
                    </Link>
                  </li>
                  <li class="mb-2">
                    <Link to="/" class=" hover:text-[#b70038] text-[#222222]">
                      Tags
                    </Link>
                  </li>
                  <li class="mb-2">
                    <Link to="/" class=" hover:text-[#b70038] text-[#222222]">
                      Nature
                    </Link>
                  </li>
                  <li class="mb-2">
                    <Link to="/" class=" hover:text-[#b70038] text-[#222222]">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div class="col-span-2 md:col-span-1 py-5 md:py-0">
                <label
                  for="email-adress-icon"
                  class="mb-6 text-sm font-semibold text-[#222222] uppercase "
                >
                  Get more updates...
                </label>

                <div class="relative mt-1">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="email-adress-icon"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-8 p-2  border-[#b70038] placeholder-gray-400  "
                    placeholder="shubolikhe@blog.com"
                  />
                </div>
                <button
                  type="button"
                  class="text-white rounded-lg text-sm w-full mt-3 py-2 text-center mr-2 mb-2 bg-[#b70038] "
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6  border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center ">
            © 2022{" "}
            <Link to="home" class="hover:text-[#b70038]">
              Shubolikhe.blog
            </Link>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#">
              <img className="social-icon" src={twitter} alt="" />
            </a>
            <a href="#">
              <img className="social-icon" src={facebook} alt="" />
            </a>
            <a href="#">
              <img className="social-icon" src={linkedin} alt="" srcset="" />
            </a>
            <a href="#">
              <img className="social-icon" src={pinterest} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
