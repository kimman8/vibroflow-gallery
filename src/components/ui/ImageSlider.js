import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ unitProfile }) => {
  const [current, setCurrent] = useState(0);
  const length = unitProfile.profileImages.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (
    !Array.isArray(unitProfile.profileImages) ||
    unitProfile.profileImages.length <= 0
  ) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow hover:text-green-500 " onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow hover:text-green-500" onClick={nextSlide} />
      {unitProfile.profileImages.map((profileImage, index) => (
        <div
          className={index === current ? "slide active " : "slide"}
          key={index}
        >
          {index === current && (
            <img
              src={profileImage}
              alt=""
              profileImage={profileImage}
              key={index}
              className="border-4 border-yellow-400  rounded-xl border-opacity-75 max-h-96 max-w-7xl hover:opacity-90"
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default ImageSlider;
