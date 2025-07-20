import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const products = [
  // آرایه محصولات شما...
  {
    id: 1,
    name: "هدست گیمینگ مدل 12123",
    price: "7,949,000",
    oldPrice: "8,500,000",
    discount: "6%",
    image: "/src/images/products/headset.png",
  },
  {
    id: 2,
    name: "موبایل مدل 1213",
    price: "7,949,000",
    oldPrice: "8,500,000",
    discount: "6%",
    image: "/src/images/products/mobile.png",
  },
  {
    id: 3,
    name: "موس گیمینگ ریزر مدل Viper",
    price: "4,120,000",
    oldPrice: "4,500,000",
    discount: "8%",
    image: "/src/images/products/mouse.png",
  },
  {
    id: 4,
    name: "کیبورد مکانیکال لاجیتک",
    price: "9,800,000",
    oldPrice: "11,000,000",
    discount: "11%",
    image: "/src/images/products/kboard.png",
  },
    {
    id: 5,
    name: "هدست گیمینگ مدل 12123",
    price: "7,949,000",
    oldPrice: "8,500,000",
    discount: "6%",
    image: "/src/images/products/headset.png",
  },
  {
    id: 6,
    name: "موبایل مدل 1213",
    price: "7,949,000",
    oldPrice: "8,500,000",
    discount: "6%",
    image: "/src/images/products/mobile.png",
  },
];






export default function ProductSlider() {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // --- تغییر اصلی در این تابع است ---
  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;

    // یک مقدار کوچک برای خطاپذیری محاسبات اعشاری در نظر می‌گیریم
    const tolerance = 1;

    // تشخیص حالت RTL از روی استایل محاسبه‌شده که قابل اعتمادتر است
    const isRtl = getComputedStyle(el).direction === 'rtl';

    if (isRtl) {
      // در حالت RTL استاندارد، scrollLeft از 0 شروع و منفی می‌شود
      const atStart = el.scrollLeft >= -tolerance;
      const atEnd = Math.abs(el.scrollLeft) + el.clientWidth >= el.scrollWidth - tolerance;
      
      setIsAtStart(atStart);
      setIsAtEnd(atEnd);
    } else {
      // منطق استاندارد برای حالت LTR
      const atStart = el.scrollLeft <= tolerance;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - tolerance;

      setIsAtStart(atStart);
      setIsAtEnd(atEnd);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    // اگر محتوایی برای اسکرول وجود نداشته باشد، هر دو دکمه غیرفعال می‌مانند
    if (scrollElement && scrollElement.scrollWidth > scrollElement.clientWidth) {
        setIsAtEnd(false);
    } else {
        setIsAtEnd(true);
    }
    
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollPosition, { passive: true });
    }
    
    // پاک‌سازی event listener
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, [products]); // با تغییر محصولات، وضعیت دوباره بررسی شود
  
  const scrollAmount = 260; 

  const handlePrev = () => {
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const handleNext = () => {
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };







  return (
    <div dir="rtl" className="bg-red-500 p-4 rounded-lg font-Dana w-full max-w-7xl mx-auto">
      <div className="flex items-center gap-x-5">
        
        <div className="flex flex-col items-center justify-center space-y-4 px-4">
          <img src="/src/images/Amazings.svg" alt="Amazings" className="w-24 h-auto" />
          
          <div className="flex gap-x-3 pt-4">
            <button
              onClick={handleNext}
              disabled={isAtStart}
              className="p-2 bg-white rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:cursor-pointer"
            >
              <ChevronRight />
            </button>
            <button
              onClick={handlePrev}
              disabled={isAtEnd}
              className="p-2 bg-white rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:cursor-pointer"
            >
              <ChevronLeft />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          dir="rtl"
          className="flex-1 flex overflow-x-auto scroll-smooth scrollbar-hide py-4"
        >
          <div className="flex gap-x-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-60 flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                <div className="h-38 w-full flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-800 h-10 mb-2">
                    {product.name}
                  </h3>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {product.discount}
                    </span>
                    <div className="text-right">
                      <p className="text-base font-bold text-gray-900">
                        {product.price}
                        <span className="text-xs font-normal"> تومان</span>
                      </p>
                      <p className="text-sm text-gray-400 line-through">
                        {product.oldPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}