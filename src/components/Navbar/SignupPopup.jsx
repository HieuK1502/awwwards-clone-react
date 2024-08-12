// src/components/SignupPopup.jsx
import React from "react";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LogoLog from "../../assets/img/logoLog.png";

const SignupPopup = ({
  isOpen,
  onClose,
  toggleToLogin,
  toggleToSignup,
}) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 flex items-center justify-center z-50 transition duration-300",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="flex rounded-lg shadow-lg z-10 max-w-6xl w-full h-auto">
        {/* <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Sign Up</h2>
          <IoMdClose className="cursor-pointer" onClick={onClose} />
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={toggleToLogin}
          >
            Log In
          </span>
        </p> */}
        <div className="bg-[#EDEDED] w-1/2 rounded-l-lg p-8 flex flex-col justify-between">
          <h1 className="text-xl">Welcome!</h1>
          <div className="flex justify-center items-center py-20">
            <img src={LogoLog} alt="" className="w-72" />
          </div>
          <p>
            Are you a member?{" "}
            <span
              className="author-p cursor-pointer"
              onClick={toggleToLogin}
            >
              Log in now
            </span>
          </p>
        </div>

        {/* Right Side */}
        <div className="bg-white w-1/2 rounded-r-lg p-8 flex flex-col justify-between">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-xl">Register with your e-mail</h1>
            <IoMdClose
              className="cursor-pointer text-3xl text-white bg-zinc-800 rounded-lg p-2"
              onClick={onClose}
            />
          </div>

          {/* Form Section */}
          <div className=" flex items-center justify-center mb-10">
            <form className="w-full">
              <div className="mb-4 flex flex-col gap-2">
                <label
                  className="block text-zinc-400 text-sm font-bold uppercase"
                  htmlFor="Username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight
                  border-zinc-300 placeholder:text-zinc-300 focus:outline-none focus:ring-0 focus:border-purple-500"
                  id="Username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-4 flex flex-col gap-2">
                <label
                  className="block text-zinc-400 text-sm font-bold uppercase"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight
                  border-zinc-300 placeholder:text-zinc-300 focus:outline-none focus:ring-0 focus:border-purple-500"
                  id="email"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6 gap-4 grid grid-cols-2">
                <div className="space-y-2">
                  <label
                    className="block text-zinc-400 text-sm font-bold uppercase"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight 
                    border-zinc-300 placeholder:text-zinc-300 focus:outline-none focus:ring-0 focus:border-purple-500"
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="block text-zinc-400 text-sm font-bold uppercase"
                    htmlFor="repeatPassword"
                  >
                    Repeat password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight 
                    border-zinc-300 placeholder:text-zinc-300 focus:outline-none focus:ring-0 focus:border-purple-500"
                    id="repeatPassword"
                    type="repeatPassword"
                    placeholder="Repeat password"
                  />
                </div>
              </div>
              <div className="mb-3 space-y-5">
                <p className="text-zinc-700">
                  Awwwards may keep me informed with personalized
                  emails about products and services. See our{" "}
                  <span className="font-bold">Privacy Policy</span>{" "}
                  for more details.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="keepMeLoggedIn"
                      name="keepMeLoggedIn"
                      className="h-4 w-4 border border-zinc-400 rounded focus:ring-0 duration-200 checked:bg-black"
                    />
                    <label
                      htmlFor="keepMeLoggedIn"
                      className="block text-sm text-gray-900"
                    >
                      Please contact me via e-mail
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="keepMeLoggedIn"
                      name="keepMeLoggedIn"
                      className="h-4 w-4 border border-zinc-400 rounded focus:ring-0 duration-200 checked:bg-black"
                    />
                    <label
                      htmlFor="keepMeLoggedIn"
                      className="block text-sm text-gray-900"
                    >
                      I have read and accept the Terms and Conditions
                    </label>
                  </div>
                </div>
              </div>
            </form>

            {/* Sign In With Section */}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-zinc-500 text-sm">
              This site is protected by reCAPTCHA and the Google
              Privacy Policy and Terms of Service apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;
