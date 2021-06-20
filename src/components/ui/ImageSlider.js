import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import FormCustom from "./FormCustom";

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
      <section className="flex justify-between items-center z-10">
        <FaArrowAltCircleLeft
          className="left-arrow hover:text-green-500 "
          onClick={prevSlide}
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
                className="border-4 border-yellow-400 rounded-xl border-opacity-75 max-w-xs md:max-w-md md:max-h-48 lg:max-h-64 xl:max-h-80 xl:max-h-96 lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl 2xl:max-h-96 max-h-32 hover:opacity-90"
              />
            )}
          </div>
        ))}
        <FaArrowAltCircleRight
          className="right-arrow hover:text-green-500"
          onClick={nextSlide}
        />
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
              className=" max-h-12 max-w-2xl md:max-h-16 lg:max-h-20 xl:max-h-28 hover:opacity-90 mx-1 cursor-pointer"
              // onClick={(e) => console.log(e.target.src)}
              onClick={(e) => selector}
            />
            <div>
              <img src="" alt="" className="bg-red-500 container rounded" />
            </div>
          </div>
        ))}
      </div>
      <FormCustom />
    </div>
  );
};
export default ImageSlider;
