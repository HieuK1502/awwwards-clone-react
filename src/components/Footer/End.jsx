import React from "react";
import { FaRegCalendarMinus } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-10 md:mt-16 lg:mt-20 mobile-global lg:global">
      <div className="flex flex-col py-10 text-zinc-800">
        <p className="text-black text-3xl font-bold">W.</p>
        <div className="md:flex md:justify-between md:items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-44 text-sm md:text-base lg:text-lg lg:grid-cols-5">
            <div className="flex flex-col">
              <ul className="mt-7 space-y-3 font-bold">
                <li>Websites</li>
                <li>Collections</li>
                <li>Elements</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <ul className="mt-7 space-y-3 font-bold">
                <li>Academy</li>
                <li>Jobs</li>
                <li>Market</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <ul className="mt-7 space-y-3 font-bold">
                <li>Directory</li>
                <li>Conferences</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <ul className="mt-7 space-y-3 font-bold">
                <li>FAQs</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center mt-6 md:mt-10 lg:mt-0">
            <div className="flex items-center justify-between gap-1 md:px-3 h-16 bg-white rounded-lg text-[17px]">
              <p>Next Conferences</p>
              <FaRegCalendarMinus />
              <p className="font-bold underline underline-offset-8">
                Valencia & NYC
              </p>
            </div>
          </div>
        </div>

        <hr className="border-[1px] border-zinc-200 mt-6" />

        <div className="flex flex-wrap justify-between space-y-4 md:space-y-3 lg:space-y-0 py-6 text-sm">
          <div className="flex gap-4">
            <p>Cookies Policy</p>
            <p>Legal Terms</p>
            <p>Privacy Policy</p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4">
            <p className="font-bold">Connect:</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>YouTube</p>
            <p>TikTok</p>
            <p>Pinterest</p>
            <p className="font-bold">Sponsored by Webflow</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
