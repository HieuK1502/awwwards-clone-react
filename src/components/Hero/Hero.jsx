import React from "react";
import Buzzworthy from "../../assets/img/buzzworthy.png";
import Juraj from "../../assets/img/juraj.jpg";
import Kodo from "../../assets/img/kodo.png";
import Akaru from "../../assets/img/akaru.jpg";
import Banner from "../../assets/img/banner.png";

const Hero = () => {
  return (
    <section className="bg-[#E3CADF]">
      <div className="py-10 w-full">
        <div className="flex justify-center items-center space-x-2 lg:space-x-3">
          <p>Site of the Day</p>
          <p className="font-medium border-[1px] py-[1px] px-2 rounded-md border-gray-400">
            Aug 4, 2024
          </p>
          <p>Score 7.19 of 10</p>
        </div>

        <div className="text-center mt-2">
          <h1 className="text-gray-900">BE THE BUZZ</h1>
        </div>

        <div className="flex justify-center items-center md:mt-4 gap-5">
          <div className="flex justify-center items-center mt-6 space-x-2">
            <img
              src={Buzzworthy}
              alt=""
              className="w-8 rounded-full"
            />
            <p className="hidden lg:block author-p text-[22px]">
              Buzzworthy-Studio
            </p>
            <span className="hidden lg:block text-xs">PRO</span>
          </div>
          <div className="flex justify-center items-center mt-6 space-x-2">
            <img src={Juraj} alt="" className="w-8 rounded-full" />
            <p className="hidden lg:block author-p text-[22px]">
              Juraj Molnár
            </p>
            <span className="hidden lg:block text-xs">PRO</span>
          </div>
          <div className="flex justify-center items-center mt-6 space-x-2">
            <img src={Kodo} alt="" className="w-8 rounded-full" />
            <p className="hidden lg:block author-p text-[22px]">
              Kodo House
            </p>
          </div>
          <div className="flex justify-center items-center mt-6 space-x-2">
            <img src={Akaru} alt="" className="w-8 rounded-full" />
            <p className="hidden lg:block author-p text-[22px]">
              Akaru
            </p>
            <span className="hidden lg:block text-xs">INT</span>
          </div>
        </div>

        {/* Banner Image */}
        <img
          src={Banner}
          alt=""
          className="mt-10 md:mt-16 px-3 w-full custom-border pb-5"
        />
      </div>
    </section>
  );
};

export default Hero;
