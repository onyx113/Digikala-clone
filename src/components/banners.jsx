import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <div
        className="mt-10  flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <img key={index} src={banner} alt={`Banner ${index + 1}`} className="w-full flex-shrink-0" />
        ))}
      </div>
      <div className="mb-65 absolute bottom-2 right-4 flex space-x-2">
        <button
          onClick={prevSlide}
          className="bg-gray-800 p-2 text-white rounded-full"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-800 p-2 text-white rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BannerSlider;
