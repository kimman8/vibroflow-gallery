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
    <div className="max-h-full">
      <section className="flex flex-col items-center content-evenly z-10">
        {unitProfile.profileImages.map((profileImage, index) => (
          <div
            className={index === current ? "mx-auto slide active " : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={profileImage}
                alt=""
                profileImage={profileImage}
                key={index}
                className=" rounded-md border-opacity-75 min-w-full md:max-w-md md:max-h-48 lg:max-h-64 xl:max-h-80 xl:max-h-96 lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl 2xl:max-h-96 max-h-32 hover:opacity-90"
              />
            )}
          </div>
        ))}
        <div className="flex justify-between mt-6">
          <FaArrowAltCircleLeft
            className="left-arrow hover:text-green-500 text-2xl mr-10"
            onClick={prevSlide}
          />
          <FaArrowAltCircleRight
            className="right-arrow hover:text-green-500 text-2xl ml-10"
            onClick={nextSlide}
          />
        </div>
      </section>
      <div className="flex justify-center items-center mt-3">
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
    </div>
  );
};
export default ImageSlider;
