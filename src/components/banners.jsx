import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Daste from './daste';

const banners = [
  "src/images/banners/banner1.webp",
  "src/images/banners/banner2.gif",
  "src/images/banners/banner3.webp",
  "src/images/banners/banner4.gif",
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    console.log('Next slide clicked');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    console.log('Previous slide clicked');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (
    <div className="-z-1 relative w-full overflow-hidden">
      <Daste className="absolute top-0 left-0" />
      <div
        className="mt-10  h-[350px] flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <img key={index} src={banner} alt={`Banner ${index + 1}`} className="w-full flex-shrink-0" />
        ))}
      </div>
      <div className="absolute z-100 mb-5  bottom-2 right-4 flex space-x-2">
        <button
          onClick={prevSlide}
          className="bg-gray-800  p-2 text-white rounded-full"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className=" bg-gray-800 p-2 text-white rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BannerSlider;
