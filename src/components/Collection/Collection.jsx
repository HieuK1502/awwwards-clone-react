import React from "react";
import { GoArrowRight } from "react-icons/go";
import { collectionsData } from "../../assets/assets";
import AvatarStack from "./AvatarStack";

const Collection = () => {
  return (
    <section className=" mobile-global lg:global">
      <div className="mt-16 md:mt-20">
        <div className="space-y-4">
          <p className="">Collections</p>
          <p className="font-bold text-3xl md:text-5xl text-zinc-900 pb-10 md:pb-16 !leading-tight">
            Explore a wide <br /> variety of collections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
          {collectionsData.map((collection) => (
            <div key={collection.id}>
              <img
                src={collection.imgBanner}
                alt=""
                className="rounded-xl w-full"
              />
              <div className="flex flex-col lg:flex-row items-start lg:items-center mt-3 lg:space-x-2 gap-1 mb-12">
                <p className="title-p lg:text-[22px]">
                  {collection.title}
                </p>
                <div className="flex items-center gap-2">
                  <span>followed by</span>
                  <AvatarStack
                    avatars={[
                      collection.avatar1,
                      collection.avatar2,
                      collection.avatar3,
                    ]}
                    followers={collection.followers}
                  />
                  {/* <span className="font-bold text-xs lg:text-xl">
                    +{collection.followers}
                  </span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-global lg:global flex flex-col md:flex-row items-center justify-center gap-2 mt-1">
        <p className="text-base md:text-lg">
          Find inspiration for your projects
        </p>
        <div className="flex justify-center items-center gap-1">
          <GoArrowRight className="cursor-pointer" />
          <p className="author-p text-base md:text-[22px] lg:text-lg cursor-pointer">
            View Collections
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collection;
