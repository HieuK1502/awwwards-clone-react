import React from "react";
import { GoArrowRight } from "react-icons/go";

const VisitSotd = () => {
  return (
    <section className="mobile-global lg:global ">
      <div className="mt-16 md:mt-20 lg:mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-5 ">
          <div
            // key={directory.id}
            className="w-full bg-hero-pattern rounded-xl px-8"
          >
            <div className="text-white w-3/4 lg:w-2/3 space-y-10 mt-14">
              <div className="flex flex-col">
                <p>Share your work</p>
                <p className="text-3xl lg:text-5xl font-bold !leading-snug mt-3">
                  Submit your website for visibility and recognition
                </p>
              </div>
              <button
                className="bg-transparent border-[1px] border-white rounded-lg 
                  px-10 py-4 hover:bg-white hover:text-black duration-300"
              >
                Submit Website
              </button>
            </div>

            <div className="pt-10 pb-6 text-end">
              <p className="text-white">
                Got questions? Read our FAQs
              </p>
            </div>
          </div>

          <div
            // key={directory.id}
            className="hidden md:block w-full bg-hero-pattern rounded-xl px-8"
          >
            <div className="text-white w-3/4 lg:w-2/3 space-y-10 mt-14">
              <div className="flex flex-col">
                <p>Share your work</p>
                <p className="text-3xl lg:text-5xl font-bold !leading-snug mt-3">
                  Submit your website for visibility and recognition
                </p>
              </div>
              <button
                className="bg-transparent border-[1px] border-white rounded-lg 
                  px-10 py-4 hover:bg-white hover:text-black duration-300"
              >
                Submit Website
              </button>
            </div>

            <div className="pt-10 pb-6 text-end">
              <p className="text-white">
                Got questions? Read our FAQs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Table section */}
    </section>
  );
};

export default VisitSotd;
