import React from "react";
import art from "../assets/art.jpg";
import leaves from "../assets/leaves.jpg";
const MonaSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${leaves})` }}
      className="min-h-[200px]  relative font-Playfair bg-fixed flex items-center justify-center py-3 p-2 my-4 "
    >
      <img
        className="absolute md:relative top-[80%] w-[90%] md:w-[40%] rounded-md shadow-2xl"
        src={art}
        alt=""
        srcset=""
      />
      <div className="flex  justify-center gap-2 md:gap-8 flex-col">
        <h1 className="text-xl md:text-4xl px-3 font-extrabold text-[#463b24] lg:text-7xl">
          “The aim of art is to represent not the outward appearance of things,
          but their inward significance.”
        </h1>
        <h1 className="text-lg md:text-3xl lg:text-4xl px-3 font-bold font-poppins text-[#463b24] ">
          -Aristotle
        </h1>
      </div>
    </div>
  );
};

export default MonaSection;
