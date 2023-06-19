import React from "react";
import CategoryCard from "./CategoryCard";
import img from "./adcent.jpeg";
const Categories = () => {
  return (
    <div className="flex justify-center  w-full">
      <div className="mt-4 p-5 w-[80%]  items-center ">
        <span className="items-center flex justify-center">
          <p className="border-b w-fit cursor-pointer text-3xl font-bold ml-7 border-black hover:text-purple-500 ease-in-out duration-500 hover:border-purple-600">
            Categories
          </p>
        </span>
        <div className=" flex flex-wrap justify-center ">
          <div>
            <CategoryCard title="Action" img={img} />
          </div>
          <div>
            <CategoryCard title="Action" img={img} />
          </div>
          <div>
            <CategoryCard title="Action" img={img} />
          </div>
          <div>
            <CategoryCard title="Action" img={img} />
          </div>
          <div>
            <CategoryCard title="Action" img={img} />
          </div>
          <div>
            <CategoryCard title="Action" img={img} />
          </div>
          <div>
            <CategoryCard title="Action" img={img} />
          </div>
          <div>
            <CategoryCard title="Action" img={img} />
          </div>
          <div>
            <CategoryCard title="Action" img={img} />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Categories;
