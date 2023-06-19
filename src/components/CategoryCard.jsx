import React from "react";

const CategoryCard = ({title,img,...props}) => {
  return (
    <div
      className="w-[200px] ml-5 mt-4 relative flex hover:scale-110 hover:z-10 ease-in-out duration-200 justify-center cursor-pointer rounded-md text-xl font-bold h-[125px] bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${img})`,
      }}
    >
      <p className="absolute bottom-4">{title}</p>
    </div>
  );
};

export default CategoryCard;
