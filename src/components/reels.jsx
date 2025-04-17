import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";



export default function Reels() {
  const sliderRef = useRef(null);

  const stories = [
    { id: 1, title: "کیت ته", img: "./src/images/reel3.png" },
    { id: 2, title: "بادوم زمینی از نوع هوایی", img: "./src/images/reel3.png" },
    { id: 3, title: "خرده‌ بازار قسمت دوم", img: "./src/images/reel3.png" },
    { id: 4, title: "بررسی کامل ردمی نوت ۱۴ پرو پلاس", img: "./src/images/reel3.png" },
    { id: 5, title: "نسل جدید شارژر", img: "./src/images/reel3.png" },
    { id: 6, title: "سه بعدی پکشن", img: "./src/images/reel3.png" },
    { id: 7, title: "اتوبان برق!", img: "./src/images/reel3.png" },
    { id: 8, title: "بهترین کابل HDMI با اختلاف", img: "./src/images/reel3.png" },
    { id: 9, title: "خفن‌ترین هدفون شیائومی", img: "./src/images/reel3.png" },
    { id: 10, title: "هدفون جدید هایلو X1 2023", img: "./src/images/reel3.png" },
    { id: 11, title: "خوشگل‌ترین هدفون اقتصادی", img: "./src/images/reel3.png" },
    { id: 12, title: "آش رشته با پیمینا", img: "./src/images/reel3.png" },
  ];
  
  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: direction * 300, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center mt-10 relative w-full overflow-hidden px-4 -z-100">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={() => scroll(-1)}
      >
        <ChevronLeft size={24} />
      </button>

      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-2 border-pink-500 overflow-hidden">
              <img
                src={story.img}
                alt={story.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-center mt-2 w-20 truncate">{story.title}</p>
          </div>
        ))}
      </div>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={() => scroll(1)}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

        