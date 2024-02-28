import React from "react";

const Story = ({ img, username }) => {
  return (
    <div className=" m-2">
      <div
        className="relative hover:scale-110 transition transform
          duration-200 ease-out object-contain cursor-pointer"
      >
        <img
          src={img}
          className="h-14 w-14 rounded-full object-contain cursor-pointer   p-1"
          alt="story"
        />
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-red-500 "></div>
      </div>
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
};
export default Story;
