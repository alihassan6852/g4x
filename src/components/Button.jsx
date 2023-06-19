import React from "react";

const Button = ({ icon, text, onclick, disabled, ...props }) => {
  return (
    <div>
      <button
        onClick={onclick}
        disabled={disabled}
        className="sm:bg-purple-600 max-w-fit h-9 rounded-md hover:bg-black sm:border-purple-600 sm:border ease-in-out duration-500"
      >
        <div className="mt-1 flex">
          <span className="hidden sm:flex">{icon}</span>

          <p className={`md:mr-2 ${!icon && "md:ml-2"} md:text-base text-sm mb-1 `}>
            {text}
          </p>
        </div>
      </button>
    </div>
  );
};

export default Button;
