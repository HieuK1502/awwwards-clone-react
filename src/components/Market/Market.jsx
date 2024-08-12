import React from "react";
import { GoArrowRight } from "react-icons/go";
import { marketData } from "../../assets/assets";

const Market = () => {
  return (
    <section className="mobile-global lg:global">
      <div className="mt-16 md:mt-20">
        <div className="space-y-4">
          <p className="">Market</p>
          <p className="font-bold text-3xl md:text-5xl text-zinc-900 pb-10 md:pb-16 !leading-tight">
            A curated marketplace <br /> for digital & physical
            products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-5">
          {marketData.map((market) => (
            <div
              key={market.id}
              className={`bg-zinc-100 rounded-xl custom-shadow ${
                market.id > 2 ? "hidden lg:block" : ""
              }`}
            >
              <img
                src={market.image}
                alt=""
                className="rounded-t-xl w-full"
              />
              <div className="px-3">
                <div className="flex flex-col items-start mt-3 gap-3 pb-4">
                  <p className="">Digital Product</p>
                  <p className="py-2 title-p lg:text-[22px] md:h-14 lg:h-24">
                    {market.title}
                  </p>
                </div>

                <hr className="border-[1px] border-zinc-200" />

                <div className="flex justify-between items-start mt-3 pb-4">
                  <div className="flex flex-col lg:flex-row gap-2">
                    <p>by</p>
                    <p className="font-bold">{market.author}</p>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-2">
                    <p className="text-sm">from</p>
                    <p className="font-bold text-xl ">
                      {market.price} USD
                    </p>
                  </div>
                </div>

                <hr className="border-[1px] border-zinc-200" />

                <div className="flex justify-between py-3 items-center">
                  <p className="font-bold">View Product</p>
                  <GoArrowRight className="text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-global lg:global flex flex-col md:flex-row items-center justify-center gap-2 mt-12">
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

export default Market;
