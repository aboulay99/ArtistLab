import React from "react";

const PhotoGraphSection = ({ src }) => {
  return (
    <img
      className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] object-contain border-solid border-8 bg-white border-[#fff] shadow-xl"
      src={src}
      alt=""
      srcset=""
    />
  );
};

export default PhotoGraphSection;
