import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "ساعت هوشمند شیائومی مدل Redmi Watch 5",
    price: "7,949,000",
    oldPrice: "8,500,000",
    discount: "6%",
    image: "url-to-image-1",
  },
  {
    id: 2,
    name: "ساعت هوشمند ایمیکی مدل IMIKI TG1",
    price: "1,199,000",
    oldPrice: "1,500,000",
    discount: "16%",
    image: "url-to-image-2",
  },
  {
    id: 3,
    name: "ساعت هوشمند اسپیس مدل SW-4020",
    price: "3,990,000",
    oldPrice: "4,750,000",
    discount: "16%",
    image: "url-to-image-3",
  },
  {
    id: 4,
    name: "ساعت هوشمند ونا مدل W49 ultra with 7 Bands",
    price: "1,690,000",
    oldPrice: "1,990,000",
    discount: "21%",
    image: "url-to-image-4",
  },
  {
    id: 5,
    name: "هندزفری اوکی بیس مدل USBC1516",
    price: "246,000",
    oldPrice: "295,000",
    discount: "16%",
    image: "url-to-image-5",
  },
  {
    id: 6,
    name: "هدفون بلوتوثی اکسیژن مدل E12",
    price: "519,000",
    oldPrice: "750,000",
    discount: "36%",
    image: "url-to-image-6",
  },
  {
    id: 7,
    name: "گوشی موبایل ریلمی مدل C61 دو سیم کارت ظرفیت 256GB",
    price: "8,959,000",
    oldPrice: "9,800,000",
    discount: "9%",
    image: "url-to-image-7",
  },
];

export default function ProductSlider() {
  return (
    <div className="relative bg-red-500 p-4 rounded-lg">
      <div className="flex items-center relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-10">
          <button className="p-2 bg-white rounded-full shadow-md">
            <ChevronLeft />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md">
            <ChevronRight />
          </button>
        </div>
        <div className="overflow-x-auto w-full whitespace-nowrap scrollbar-hide">
          <div className="flex space-x-4 ml-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center w-56 inline-block"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover"
                />
                <h3 className="text-sm font-semibold mt-2 text-center">
                  {product.name}
                </h3>
                <p className="text-red-600 font-bold">{product.price} تومان</p>
                <p className="line-through text-gray-500 text-sm">{product.oldPrice}</p>
                <span className="bg-red-200 text-red-700 px-2 py-1 rounded-md text-xs">
                  {product.discount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
