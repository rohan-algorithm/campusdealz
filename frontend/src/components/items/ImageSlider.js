import React from 'react';

const ImageSlider = ({ images }) => {
  console.log(images);
  return (
    <div className="carousel rounded-box">
      {images.map((image, index) => (
        <div key={index} className="carousel-item w-full h-40 sm:h-48 md:h-64 lg:h-80 xl:h-96">
          <img src={"https://res.cloudinary.com/do1t9yc6x/image/upload/v1719772892/"+image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
