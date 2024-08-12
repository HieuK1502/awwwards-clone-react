import React from "react";
import { GoArrowRight } from "react-icons/go";
import Winner from "../Winner/Winner";
import { nomineesData } from "../../assets/assets";

const Nominees = () => {
  return (
    <section className="mobile-global lg:global ">
      <div className="min-h-[1500px] mt-16 md:mt-20 lg:mt-28">
        <div className="text-center">
          <p className="text-base">Latest</p>
          <h1 className="">NOMINEES</h1>
          <p className="text-base md:text-2xl mt-5 mb-10 md:mb-16">
            Vote for the latest websites on awwwards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
          {nomineesData.map((nominee) => (
            <div key={nominee.id}>
              <div className="relative block rounded-xl overflow-hidden group">
                <img
                  src={nominee.imgBanner}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-300 via-zinc-900 to-black opacity-0 group-hover:opacity-60 transition-opacity duration-200"></div>
                <div className="absolute inset-0 flex flex-col justify-between p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div></div>
                  <div className="flex justify-center items-center">
                    <button className="bg-white text-black rounded-md py-2 px-5">
                      Vote Now
                    </button>
                  </div>
                  <div>
                    <p className="text-white">Website</p>
                    <p className="title-p lg:text-[22px] text-white">
                      {nominee.title}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center mt-3 lg:space-x-2 gap-1 mb-12">
                <p className="title-p lg:text-[22px]">
                  {nominee.title}
                </p>
                <div className="flex items-center gap-2">
                  <span>by</span>
                  <img
                    src={nominee.avatar}
                    alt=""
                    className="w-6 lg:w-10 rounded-full"
                  />
                  <p className="author-p lg:text-[22px] ">
                    {nominee.author}
                  </p>
                  <span className="text-xs lg:text-xs">
                    {nominee.detail}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mobile-global lg:global flex flex-col md:flex-row items-center justify-center lg:mt-12 gap-2">
          <p className="text-base md:text-lg">
            Check out all submitted websites
          </p>
          <div className="flex justify-center items-center gap-1">
            <GoArrowRight className="cursor-pointer" />
            <p className="author-p text-base md:text-[22px] lg:text-lg cursor-pointer">
              View Nominees
            </p>
          </div>
        </div>

        {/* Winner Section */}
        <Winner />
      </div>
    </section>
  );
};

export default Nominees;
