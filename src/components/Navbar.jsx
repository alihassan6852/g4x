import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "./G4X-LOGO-1.png";
import { Dropdown } from "flowbite-react";
const Navbar = () => {
  const [nav, setnav] = useState(false);
  const handlenav = () => {
    setnav(!nav);
  };
  return (
    <div className="border-b border-b-[#5D3FD3] flex items-center h-24  px-4 text-white">
      {/* <h1 className="w-full text-3xl font-bold text-[#00df9a]">React .</h1> */}
      <div className="md:w-[30%] w-full text-[#00df9a]">
        <img
          className="md:w-40 md:pl-6 sm:w-20 w-20 cursor-pointer"
          src={logo}
          alt=""
        />
      </div>
      <ul className="hidden md:flex  bg-black">
        <li className="p-4 cursor-pointer hover:text-[#6542f1]  bg-black text-white ">
          <Dropdown
            inline
            label="Xbox"
            className=" !bg-black !border-[#6542f1]"
          >
            <Dropdown.Item
              onClick={() => {
                console.log("");
              }}
              className="hover:!bg-[#6542f1]   bg-black text-white   "
            >
              Console & Accessories
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white   ">
              Xbox Games
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white  ">
              Xbox Prepaid Cards
            </Dropdown.Item>
          </Dropdown>
        </li>
        <li className="p-4 cursor-pointer hover:text-[#6542f1]  ">
        <Dropdown
            inline
            label="PlayStation"
            className=" !bg-black text-white !border-[#6542f1]"
          >
            <Dropdown.Item
              onClick={() => {
                console.log("");
              }}
              className="hover:!bg-[#6542f1]   bg-black text-white   "
            >
              Console & Accessories
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white   ">
              PlayStation Games
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white  ">
              PalyStation Prepaid Cards
            </Dropdown.Item>
          </Dropdown>
        </li>
        <li className="p-4 cursor-pointer hover:text-[#6542f1]  ">
        <Dropdown
            inline
            label="PC"
            className=" !bg-black text-white !border-[#6542f1]"

          >
            <Dropdown.Item
              onClick={() => {
                console.log("");
              }}
              className="hover:!bg-[#6542f1]   bg-black text-white   "
            >
             Epic
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white   ">
              Microsoft
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white  ">
             Origin
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white  ">
             Steam
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white  ">
             Ubisoft
            </Dropdown.Item>
          </Dropdown>
        </li>
        <li className="p-4 cursor-pointer hover:text-[#6542f1]  ">
        <Dropdown
            inline
            label="Nintendo"
            className=" !bg-black text-white !border-[#6542f1]"

          >
            <Dropdown.Item
              onClick={() => {
                console.log("");
              }}
              className="hover:!bg-[#6542f1]   bg-black text-white   "
            >
              Console & Accessories
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white   ">
            Nintendo Games
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white  ">
            Nintendo Prepaid Cards
            </Dropdown.Item>
          </Dropdown>
        </li>
        <li className="p-4 cursor-pointer hover:text-[#6542f1]  ">Gift Cards</li>
       
      </ul>
      <div onClick={handlenav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-[60%] z-10 h-full border-r bg-[#000300] border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        {/* <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          React .
        </h1> */}
        <img
          className="md:w-40 md:pl-6 sm:w-20 w-20  cursor-pointer m-4 mt-7"
          src={logo}
          alt=""
        />
        {/* <ul className="uppercase p-4  ">
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#6542f1]   ">
            Home
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#6542f1]   ">
            Company
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#6542f1]   ">
            About
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#6542f1]   ">
            Resources
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#6542f1]   ">
            Contact
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#6542f1]     ">
            <Dropdown inline label="Drop">
              <Dropdown.Item
                onClick={() => {
                  console.log("");
                }}
                className="hover:hover:text-[#6542f1]   "
              >
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item className="hover:hover:text-[#6542f1]   ">
                Settings
              </Dropdown.Item>
              <Dropdown.Item className="hover:hover:text-[#6542f1]   ">
                Earnings
              </Dropdown.Item>
              <Dropdown.Item className="hover:hover:text-[#6542f1]   ">
                Sign out
              </Dropdown.Item>
            </Dropdown>
          </li>
        </ul> */}
        <ul className="uppercase p-4 ">
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#6542f1]  bg-black text-white ">
          <Dropdown
            inline
            label="Xbox"
            className=" !bg-black !border-[#6542f1]"
          >
            <Dropdown.Item
              onClick={() => {
                console.log("");
              }}
              className="hover:!bg-[#6542f1]   bg-black text-white   "
            >
              Console & Accessories
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white   ">
              Xbox Games
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white  ">
              Xbox Prepaid Cards
            </Dropdown.Item>
          </Dropdown>
        </li>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#6542f1]  ">
        <Dropdown
            inline
            label="PlayStation"
            className=" !bg-black text-white !border-[#6542f1]"
          >
            <Dropdown.Item
              onClick={() => {
                console.log("");
              }}
              className="hover:!bg-[#6542f1]   bg-black text-white   "
            >
              Console & Accessories
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white   ">
              PlayStation Games
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white  ">
              PalyStation Prepaid Cards
            </Dropdown.Item>
          </Dropdown>
        </li>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#6542f1]  ">
        <Dropdown
            inline
            label="PC"
            className=" !bg-black text-white !border-[#6542f1]"

          >
            <Dropdown.Item
              onClick={() => {
                console.log("");
              }}
              className="hover:!bg-[#6542f1]   bg-black text-white   "
            >
             Epic
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white   ">
              Microsoft
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white  ">
             Origin
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white  ">
             Steam
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white  ">
             Ubisoft
            </Dropdown.Item>
          </Dropdown>
        </li>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#6542f1]  ">
        <Dropdown
            inline
            label="Nintendo"
            className=" !bg-black text-white !border-[#6542f1]"

          >
            <Dropdown.Item
              onClick={() => {
                console.log("");
              }}
              className="hover:!bg-[#6542f1]   bg-black text-white   "
            >
              Console & Accessories
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white   ">
            Nintendo Games
            </Dropdown.Item>
            <Dropdown.Item className="hover:!bg-[#6542f1]   bg-black text-white  ">
            Nintendo Prepaid Cards
            </Dropdown.Item>
          </Dropdown>
        </li>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#6542f1]  ">Gift Cards</li>
       
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
