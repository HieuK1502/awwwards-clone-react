import React from "react";
import { GoArrowRight } from "react-icons/go";
import { coursesData } from "../../assets/assets";

const Academy = () => {
  return (
    <section className="mobile-global lg:global ">
      <div className="mt-16 md:mt-20">
        <div className="space-y-4">
          <p className="">Academy</p>
          <p className="font-bold text-3xl md:text-5xl text-zinc-900 pb-10 md:pb-16 !leading-tight">
            Learn from the <br /> best instructors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-5">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className={`bg-zinc-100 rounded-xl custom-shadow ${
                course.id > 2 ? "hidden lg:block" : ""
              }`}
            >
              <img
                src={course.imgBanner}
                alt=""
                className="rounded-t-xl w-full"
              />
              <div className="flex flex-col px-3 items-start mt-3 gap-3 pb-6">
                <p className="title-p lg:text-[22px] h-16">
                  {course.title}
                </p>

                <div className="flex justify-between w-full">
                  <p className="font-bold">Instructor</p>
                  <p>{course.author}</p>
                </div>

                <div className="flex justify-between items-center w-full">
                  <div className="w-1/4">
                    <div className="w-full max-w-sm">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm font-medium text-gray-500">
                          Rating
                        </div>
                        <div className="ml-2 text-sm font-medium text-gray-700">
                          {course.score}/5
                        </div>
                      </div>
                      <div className="w-full bg-zinc-300 rounded h-1.5">
                        <div
                          className="bg-blue-500 h-1.5 rounded"
                          style={{
                            width: `${(course.score / 5) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <GoArrowRight className="text-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-global lg:global flex flex-col md:flex-row items-center justify-center gap-2 mt-12">
        <p className="text-base md:text-lg">
          Browse specially curated products
        </p>
        <div className="flex justify-center items-center gap-1">
          <GoArrowRight className="cursor-pointer" />
          <p className="author-p text-base md:text-[22px] lg:text-lg cursor-pointer">
            View Market
          </p>
        </div>
      </div>
    </section>
  );
};

export default Academy;
