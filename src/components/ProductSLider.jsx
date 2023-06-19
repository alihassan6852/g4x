import React from "react";
import GameCard from "./GameCard";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Button from "./Button";
const ProductSLider = ({ title, data, game, ...props }) => {
  const scrollLeft = () => {
    document.getElementById(`${title}`).scrollLeft -= 800;
  };
  const scrollRight = () => {
    document.getElementById(`${title}`).scrollLeft += 800;
  };
  console.log(data);
  return (
    <div className="relative mt-5 scrollbar-hide">
      <div className="ml-7 text-white  text-3xl cursor-pointer font-bold ">
        <p className="border-b w-fit border-black hover:text-purple-500 ease-in-out duration-500 hover:border-purple-600">
          {title}
        </p>
      </div>
      <div className="absolute right-0 top-5">
        <button
          onClick={scrollLeft}
          className="p-2 m-2 bg-gray-500 rounded-full hover:bg-gray-400 text-2xl"
        >
          <FiChevronLeft />{" "}
        </button>
        <button
          onClick={scrollRight}
          className="p-2 m-2 bg-gray-500 rounded-full hover:bg-gray-400 text-2xl"
        >
          <FiChevronRight />{" "}
        </button>
      </div>

      <div
        id={title}
        className="carusel mt-8 p-4 flex justify-start overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {data &&
           
              data.map((item) => {
                return (
                  <div>
                    {console.log(item)}
                    <GameCard
                      title={item.title}
                      price={item.price}
                      sale={item.sale}
                      img={item.img}
                      game={item.game}

                    />
                  </div>
                );
              })
        
        }
      </div>
      <div className="mt-4 flex justify-center">
        <Button text={"View More"} />
      </div>
    </div>
  );
};

export default ProductSLider;
