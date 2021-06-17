import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import ImageGallery from "./ImageGallery";

const ImageSlider = ({ unitProfile }) => {
  const [current, setCurrent] = useState(0);
  const length = unitProfile.profileImages.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const selector = (e) => {
    setCurrent(
      unitProfile.profileImages.findIndex(
        (profileImage) => profileImage === e.target.src
      )
    );
  };

  if (
    !Array.isArray(unitProfile.profileImages) ||
    unitProfile.profileImages.length <= 0
  ) {
    return null;
  }

  return (
    <div>
      <section className="slider">
        <FaArrowAltCircleLeft
          className="left-arrow hover:text-green-500 "
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className="right-arrow hover:text-green-500"
          onClick={nextSlide}
        />
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
                className="border-4 border-yellow-400  rounded-xl border-opacity-75 max-w-xs md:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl hover:opacity-90"
              />
            )}
          </div>
        ))}
      </section>
      <div className="flex justify-center items-center mt-10">
        {unitProfile.profileImages.map((profileImage, index) => (
          <div
            className={
              index === current ? "slideThumbnail active " : "slideThumbnail"
            }
            key={index}
          >
            <img
              src={profileImage}
              alt=""
              profileImage={profileImage}
              key={index}
              className=" max-h-24 max-w-2xl hover:opacity-90 mx-1 cursor-pointer"
              // onClick={(e) => console.log(e.target.src)}
              onClick={(e) => selector}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
