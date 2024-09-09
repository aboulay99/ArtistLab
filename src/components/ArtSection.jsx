import React, { useRef } from "react";
import painter from "../assets/painter.png";
import { motion, useScroll, useTransform } from "framer-motion";
const ArtSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const { scaleProgress } = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      style={{ scale: scrollYProgress, opacity: scaleProgress }}
      ref={ref}
      className="min-h-[300px] my-6 flex items-center divide-x-2 lg:pr-4 justify-center font-Playfair"
    >
      <div className=" flex flex-col items-center justify-center space-y-7 py-4 md:rounded-l-md bg-[#ffffff]">
        <h1 className="uppercase text-4xl text-center font-bold w-[90%] lg:text-5xl md:text-5xl lg:w-[60%] text-gray-600 ">
          Enjoy Browsing people's Work
        </h1>
        <p className="text-gray-700 w-[90%] lg:w-[60%] text-xl text-center ">
          We have the best recommendation system built with one of the most
          accurate and fast Algorithms
        </p>
        <div>
          <button className=" uppercase md:w-[300px] p-2 border-2 border-[#ad9672] transform hover:bg-[#8e7755] hover:-translate-y-0.5 duration-75 bg-[#796649] text-[#ffffff] text-lg shadow-lg sm:py-2 sm:px-4 rounded-md">
            Browse Now
          </button>
        </div>
      </div>
      <div className="min-w-[40%]  hidden md:block">
        <img className="opacity-90  max-h-[500px] " src={painter} />
      </div>
    </motion.div>
  );
};

export default ArtSection;
