import React from "react";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import LogoLog from "../../assets/img/logoLog.png";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const LoginPopup = ({ isOpen, onClose, toggleToSignup }) => {
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
        {/* Left Side */}
        <div className="bg-[#EDEDED] w-1/2 rounded-l-lg p-8 flex flex-col justify-between">
          <h1 className="text-xl">Welcome!</h1>
          <div className="flex justify-center items-center py-20">
            <img src={LogoLog} alt="" className="w-72" />
          </div>
          <p>
            Not a member yet?{" "}
            <span
              className="author-p cursor-pointer"
              onClick={toggleToSignup}
            >
              Register now
            </span>
          </p>
        </div>

        {/* Right Side */}
        <div className="bg-white w-1/2 rounded-r-lg p-8 flex flex-col justify-between">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-xl">Log in</h1>
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
                  className="block text-zinc-400 text-sm font-bold"
                  htmlFor="username"
                >
                  Email or Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight border-zinc-300 placeholder:text-zinc-300 focus:outline-none focus:ring-0 focus:border-purple-500"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6 flex flex-col gap-1">
                <label
                  className="block text-zinc-400 text-sm font-bold"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight border-zinc-300 placeholder:text-zinc-300 focus:outline-none focus:ring-0 focus:border-purple-500"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3 flex items-center gap-2">
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
                  Keep me logged in
                </label>
              </div>

              <div className="flex flex-col items-center justify-between">
                <button
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 mb-2 
                  rounded-lg focus:outline-none focus:shadow-outline duration-200"
                  type="button"
                >
                  Log In
                </button>
                <a
                  className=" inline-block font-bold text-sm text-zinc-400 hover:text-zinc-800
                  duration-200 underline underline-offset-4"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>

            {/* Sign In With Section */}
          </div>
          <div className="flex flex-col gap-4">
            <p>Or sign in with</p>
            <div className="flex justify-between gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border w-full border-zinc-600 rounded-md">
                <FaGoogle />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border w-full border-zinc-600 rounded-md">
                <FaFacebook />
                Facebook
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border w-full border-zinc-600 rounded-md">
                <FaXTwitter />
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
