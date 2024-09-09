import React, { useState } from "react";
import ListItem from "./ListItem";
import NavItemSmall from "./NavItemSmall";
import { LuMenu } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { RiCommunityFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { FaBong } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative ">
        <div className="bg-white/30 backdrop-blur-sm z-10  w-full">
          <div className="text-[#504331]  py-2 px-5 flex justify-between max-w-[1200px] mx-auto items-center">
            <a
              href="#"
              className=" flex items-center justify-center space-x-1 px-3"
            >
              <FaBong className="text-2xl md:text-3xl" />
              <h1 className="font-Roboto font-extrabold text-2xl md:text-3xl">
                ArtistLab
              </h1>
            </a>
            <div className="hidden md:flex">
              <ul className="tracking-wider flex space-x-6 text-md">
                <ListItem link="Home" />
                <ListItem link="Contact" />
                <ListItem link="Community" />
                <ListItem link="Api" />
              </ul>
            </div>
            {!isOpen && (
              <LuMenu
                className="size-7 cursor-pointer md:hidden"
                onClick={toggleNav}
              />
            )}
          </div>
        </div>
        <div
          className={` md:hidden ${
            !isOpen ? "hidden" : "block"
          }  fixed  bg-[#f4fffa] p-10 inset-0 w-[100%] h-screen  z-50 rounded-md opacity-95`}
        >
          <ul className=" pt-8 uppercase tracking-wider flex justify-center items-center space-y-10  flex-col text-md">
            <NavItemSmall text="home" icon={<IoHomeOutline />} />
            <NavItemSmall text="community" icon={<RiCommunityFill />} />
            <NavItemSmall text={"contact"} icon={<FaPhoneAlt />} />
            <NavItemSmall text={"register"} icon={<GiArchiveRegister />} />
          </ul>
          <IoMdClose
            className="absolute top-5 right-6 size-7 cursor-pointer md:hidden"
            onClick={toggleNav}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
