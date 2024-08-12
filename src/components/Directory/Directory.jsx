import React from "react";
import { GoArrowRight } from "react-icons/go";
import { directoryData } from "../../assets/assets";
import TableUser from "../Directory/TableUser";

const Directory = () => {
  return (
    <section className="bg-white mobile-global lg:global ">
      <div className="mt-16 md:mt-20 lg:mt-28">
        <div className="text-center">
          <p className="text-base">Directory</p>
          <h1 className="uppercase">w.creators</h1>
          <p className="text-base md:text-2xl mt-5 mb-10 md:mb-16">
            Active creators in your country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-5 ">
          {directoryData.map((directory) => (
            <div
              key={directory.id}
              className="w-full bg-[#222222] rounded-xl p-8 "
            >
              <div className="flex justify-between items-start">
                <img
                  src={directory.avatar}
                  alt=""
                  className="w-12 rounded-full"
                />

                <div className="flex flex-col items-center">
                  <img
                    src={directory.imgBanner}
                    alt=""
                    className="rounded-xl w-72"
                  />
                  <div className="space-x-2">
                    <button className="bg-white size-2 rounded-full"></button>
                    <button className="bg-gray-500 size-2 rounded-full"></button>
                    <button className="bg-gray-500 size-2 rounded-full"></button>
                    <button className="bg-gray-500 size-2 rounded-full"></button>
                    <button className="bg-gray-500 size-2 rounded-full"></button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-white mt-6">
                <div>
                  <p className="text-zinc-400">International</p>
                  <p className="font-bold text-5xl mt-2">
                    {directory.title}
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center size-14 border-2 border-zinc-500 rounded-lg">
                  <p className="text-[10px] text-zinc-400">Works</p>
                  <p className="text-2xl">{directory.works}</p>
                </div>
              </div>

              <div className="flex justify-between items-center text-white mt-6">
                <div className="text-zinc-400">
                  <p>{directory.link}</p>
                </div>
                <div>
                  <p>{directory.awards} awards</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table section */}
        <TableUser />
        {/* View more */}
        <div className="mobile-global lg:global flex flex-col md:flex-row items-center justify-center mt-10 lg:mt-12 gap-2">
          <p className="text-base text-center md:text-s md:text-lg">
            Connect with over <b>5,288</b> Agencies and Professionals
          </p>
          <div className="flex justify-center items-center gap-1">
            <GoArrowRight className="cursor-pointer" />
            <p className="author-p text-base md:text-[22px] lg:text-lg cursor-pointer">
              View Directory
            </p>
          </div>
        </div>
      </div>

      {/* Table section */}
    </section>
  );
};

export default Directory;
