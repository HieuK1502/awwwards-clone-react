import React from "react";
import { GoArrowRight } from "react-icons/go";
import { winnersData } from "../../assets/assets";

const Winner = () => {
  return (
    <section className="">
      <div className="mt-16 md:mt-20">
        <div className="space-y-4">
          <p className="">Winner</p>
          <p className="font-bold text-3xl md:text-5xl text-zinc-900 pb-10 md:pb-16 !leading-tight">
            Recent Sites <br /> of the Day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
          {winnersData.map((nominee) => (
            <div key={nominee.id}>
              <img
                src={nominee.imgBanner}
                alt=""
                className="rounded-xl w-full"
              />
              <div className="flex flex-col lg:flex-row items-start lg:items-center mt-3 lg:space-x-2 gap-1 mb-12">
                <p className="title-p lg:text-[22px]">
                  {nominee.title}
                </p>
                <div className="flex items-center gap-2">
                  <span>by</span>
                  <img
                    src={nominee.avatar}
                    alt=""
                    className="w-6 lg:w-8 rounded-full"
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
      </div>

      <div className="mobile-global lg:global flex flex-col md:flex-row items-center justify-center gap-2">
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
    </section>
  );
};

export default Winner;
