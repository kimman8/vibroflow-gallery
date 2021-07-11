import React, { useState } from "react";

const ImageGallery = ({ unitProfile, current }) => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        {unitProfile.profileImages.map((profileImage, index) => (
          <img
            src={profileImage}
            alt=""
            profileImage={profileImage}
            key={index}
            className="border-2 border-yellow-300 rounded-sm border-opacity-75 max-h-24 max-w-2xl hover:opacity-90 mx-1"
            onClick={(e) => console.log(e.target.src)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
