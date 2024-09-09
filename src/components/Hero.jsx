import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import art from "../assets/art.png";
import { motion } from "framer-motion";
import paper from "../assets/paper.jpg";
const Hero = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${paper})` }}
        className=" pt-14 px-4 sm:px-0  bg-gradient-to-r bg-no-repeat bg-cover from-[#cfaa7a] to-[#352b1c] flex items-center justify-center lg:px-5"
      >
        {/* left part */}

        <motion.div
          initial={{ opacity: 0, translateX: "-20vh" }}
          animate={{ opacity: 1, translateX: "0vh" }}
          transition={{ duration: 0.5 }}
          className="lg:w-[800px] space-y-5 justify-center  flex flex-col py-10"
        >
          <h1 className="font-pix mx-3 text-4xl sm:text-5xl md:w-[80%] w-[90%] text-[#493d2e] font-bold ">
            A community of creative artists
          </h1>
          <p className="font-Cabin mx-3 tracking-wider md:w-[80%] text-[#493d2e]  w-[90%] lg:text-lg font-bold">
            Art transcends the boundaries of language and culture, embodying the
            essence of human creativity and expression. It is a vibrant tapestry
            woven from the threads of imagination
          </p>
          <div className="mx-3 flex items-center space-x-3">
            <button className="p-2 border-2 border-[#978164] transform hover:bg-[#cfaa7a] hover:-translate-y-0.5 duration-75 bg-[#615036] text-[#ffffff] text-lg shadow-lg sm:py-2 sm:px-4 rounded-md">
              Explore ArtLab
            </button>
            <button className="p-2  flex items-center space-x-2 transform hover:-translate-y-0.5 duration-75 bg-[white] text-[#352b1c] text-lg shadow-mdsm:py-2 sm:px-4 rounded-md">
              <span>learn more</span>
              <FaArrowRightLong className="h-3 duration-100  text-[#352b1c] " />
            </button>
          </div>
        </motion.div>

        {/* right part */}
        <motion.div
          initial={{ opacity: 0, translateX: "20vh" }}
          animate={{ opacity: 1, translateX: "0vh" }}
          transition={{ duration: 0.6 }}
          className="hidden max-w-[400px] max-h-[400px] md:flex "
        >
          <img className="object-contain " src={art} alt="" srcset="" />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
