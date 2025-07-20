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
  }, []); // Dependency array is removed to prevent interval reset on every manual slide change

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Daste className="absolute top-0 left-0" />
      <div
        // 👇 This is the main changed line for responsiveness
        className="mt-4 md:mt-10 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <img key={index} src={banner} alt={`Banner ${index + 1}`} className="w-full flex-shrink-0 object-cover" />
        ))}
      </div>
      <div className="absolute mb-5 bottom-2 right-4 flex space-x-2">
        <button
          onClick={prevSlide}
          className="bg-gray-800 p-2 text-white rounded-full z-20"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-800 p-2 text-white rounded-full z-20"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BannerSlider;