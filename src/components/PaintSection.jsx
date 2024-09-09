import React from "react";
import paint from "../assets/paint.jpg";
const PaintSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${paint})` }}
      className="w-full flex items-center justify-center  h-[600px] bg-fixed bg-cover bg-no-repeat"
    >
      <h1 className="md:text-8xl font-extrabold text-center font-Cabin text-white">
        {" "}
        “Creativity takes courage.” <br />
        <span className="text-5xl text-center p-3 block">-Henri Matisse</span>
      </h1>
    </div>
  );
};

export default PaintSection;
