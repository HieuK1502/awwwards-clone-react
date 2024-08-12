// src/components/Navbar.jsx
import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { FaUserCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import { NavbarMenu } from "../../assets/assets";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";

const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isLoginPopupOpen, setLoginPopup] = useState(false);
  const [isSignupPopupOpen, setSignupPopup] = useState(false);

  const toggleToSignup = () => {
    setLoginPopup(false);
    setSignupPopup(true);
  };

  const toggleToLogin = () => {
    setSignupPopup(false);
    setLoginPopup(true);
  };

  return (
    <nav className="mobile-global lg:global sticky top-0 bg-[#E3CADF] z-50">
      <div className="py-2 flex justify-between items-center">
        <div className="flex items-center">
          <HiOutlineMenu
            onClick={() => setMenu(true)}
            className="text-xl lg:hidden mr-4"
          />
          <h1 className="text-2xl font-bold">W.</h1>
          <ul className="hidden lg:flex md:pl-14 md:space-x-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="font-medium">
                {menu.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <FaUserCheck
            onClick={() => setLoginPopup(true)}
            className="text-2xl lg:hidden mr-4"
          />
          <button
            className="hidden lg:block font-bold mr-4"
            onClick={() => setLoginPopup(true)}
          >
            Log in
          </button>
          <button
            className="hidden lg:block font-bold mr-7"
            onClick={() => setSignupPopup(true)}
          >
            Sign Up
          </button>
          <button className="font-bold px-5 py-2 text-white bg-gray-900 rounded-md">
            Be Pro
          </button>
          <button className="ml-4 hidden md:block font-bold px-5 py-2 border-[1px] border-gray-600 text-gray-600 rounded-md">
            Submit Website
          </button>
        </div>

        {/* Sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden top-0 right-0 backdrop-blur-0 -translate-x-full duration-300",
            isSideMenuOpen && "translate-x-0",
          )}
        >
          <section className="text-zinc-800 bg-zinc-800 flex flex-col absolute left-0 top-0 h-screen w-52 p-8 gap-8 z-50">
            <IoMdClose
              onClick={() => setMenu(false)}
              className="text-white mt-0 text-3xl cursor-pointer"
            />
            <ul className="space-y-5">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="text-white font-bold">
                  {menu.title}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Login Popup */}
      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={() => setLoginPopup(false)}
        toggleToSignup={toggleToSignup}
      />

      {/* Signup Popup */}
      <SignupPopup
        isOpen={isSignupPopupOpen}
        onClose={() => setSignupPopup(false)}
        toggleToLogin={toggleToLogin}
      />
    </nav>
  );
};

export default Navbar;
