import React from "react";
import {
  FaBong,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" flex flex-col  bg-slate-500">
      <div className="flex items-center justify-between  bg-slate-600 w-full p-5">
        <a
          href="#"
          className="text-white flex items-center justify-center space-x-1 px-3"
        >
          <FaBong className="text-2xl md:text-3xl" />
          <h1 className="font-Roboto font-extrabold text-2xl md:text-3xl">
            ArtistLab
          </h1>
        </a>
        <ul className="flex items-center justify-center space-x-5">
          <li>
            <a href="https://www.instagram.com/aboumolayaboumolay/">
              <FaInstagram className="text-white text-xl w-6 h-6" />
            </a>{" "}
          </li>
          <li>
            <a href="#">
              <FaGithub className="text-white text-xl w-6 h-6" />
            </a>{" "}
          </li>
          <li>
            <a href="#">
              <FaFacebook className="text-white text-xl w-6 h-6" />
            </a>{" "}
          </li>
          <li>
            <a href="https://www.linkedin.com/in/molay-eboubecrine-970a89322/">
              <FaLinkedin className="text-white text-xl w-6 h-6" />
            </a>{" "}
          </li>
        </ul>
      </div>
      <div className="py-10  flex items-center justify-center">
        <ul className="grid grid-cols-2 justify-items-center  gap-3 text-lg text-white font-Playfair">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
          <li>
            <a href="#">Api</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
