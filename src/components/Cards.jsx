import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
const Cards = ({ icon, title, text }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <motion.div
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      ref={ref}
      className="  bg-white w-[380px] flex flex-col py-3 shadow-xl  rounded-md h-[400px] px-2 space-y-8 items-center justify-center  "
    >
      <div className="flex items-center justify-center space-x-5 text-gray-600 h-[20%]">
        {icon}
        <h1 className="text-3xl"> {title}</h1>
      </div>
      <h1 className="w-2/3  font-poppins text-lg text-gray-700">{text}</h1>
      <a
        href=""
        className="flex items-center justify-center text-lg text-gray-700"
      >
        Learn more
        <IoIosArrowForward />
      </a>
    </motion.div>
  );
};

export default Cards;

// from-[#cfaa7a] to-[#917a57] bg-gradient-to-r
