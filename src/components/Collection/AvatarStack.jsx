import React from "react";

const AvatarStack = ({ avatars, followers }) => {
  return (
    <div className="flex -space-x-4 rtl:space-x-reverse">
      {avatars.map((avatar, index) => (
        <img
          key={index}
          className="w-10 border-2 border-white rounded-full dark:border-gray-800 grayscale"
          src={avatar}
          alt=""
        />
      ))}
      {/* Add a "+" Badge */}
      <a
        className="z-10 flex items-center justify-center w-16 h-10 text-xs font-medium text-white bg-gray-600 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
        href=""
      >
        +{followers}
      </a>
    </div>
  );
};

export default AvatarStack;
