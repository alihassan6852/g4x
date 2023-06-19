import React from "react";
import Button from "./Button";
import Svg from "./Svg";

const GameCard = ({
  title,
  img,
  price,
  sale,
  cartclick,
  onclick,
  game,
  ...props
}) => {
  return (
    <div className={`${game ? 'w-[200px]':'md:w-[400px] w-[200px] '} m-2 card `}>
      <div className="">
        <div className="m-2 cursor-pointer " onClick={onclick} >
          <img src={img} alt=""  />
        </div>
        <p
          className="md:font-bold flex md:text-xl m-2 cursor-pointer"
          onClick={onclick}
        >
          {title}
        </p>
      </div>
      <div className="flex">
        {sale && <p className="ml-2 mb-2 text-sm line-through">£ {sale}</p>}
        <p className="ml-2 mb-2">£ {price}</p>
      </div>

      <span className="flex justify-between items-center mr-3">
        <span className="ml-3">
          <Svg.Favourate />
        </span>
        <Button text={"Add to Cart"} icon={<Svg.cart />} onclick={cartclick} />
      </span>
    </div>
  );
};

export default GameCard;
