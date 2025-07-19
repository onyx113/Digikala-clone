export default function Footer1() {
    return (
      <footer className="bg-gray-100 text-gray-700 p-8 text-right rtl font-Dana">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <img src="./src/images/Footer/zemanat.svg" alt="ضمانت اصل بودن کالا" className="w-12 h-12" />
            <p className="mt-2 text-sm">ضمانت اصل بودن کالا</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./src/images/Footer/haft.svg" alt="هفت روز ضمانت بازگشت کالا" className="w-12 h-12" />
            <p className="mt-2 text-sm">هفت روز ضمانت بازگشت کالا</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./src/images/Footer/24saat.svg" alt="۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم" className="w-12 h-12" />
            <p className="mt-2 text-sm">هفت روز هفته،24 ساعته پاسخگوی شما هستیم</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./src/images/Footer/emk-pardakh.svg" alt="امکان پرداخت در محل" className="w-12 h-12" />
            <p className="mt-2 text-sm">امکان پرداخت در محل</p>
          </div>
        </div>
        
        <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 order-2 md:order-1">
            <p className="font-bold">!همراه ما باشید</p>
            <div dir="rtl" className="opacity-50 flex space-x-4 mt-2">
              <img src="./src/images/Footer/insta.svg" alt="Instagram" className="w-6 h-6" />
              <img src="./src/images/Footer/twiter.svg" alt="Twitter" className="w-6 h-6" />
              <img src="./src/images/Footer/lin.svg" alt="LinkedIn" className="w-6 h-6" />
              <img src="./src/images/Footer/aparat.svg" alt="aparat" className="w-6 h-6" />
            </div>
            <p className="mt-4">با ثبت ایمیل، از جدیدترین تخفیف‌ها باخبر شوید</p>
            <div className="flex justify-end  mt-2">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">ثبت</button>
              <input type="email" placeholder="ایمیل شما" className="bg-gray-300 p-2 w-200 rounded-lg" />
              
            </div>
          </div>
          
          <div className="md:col-span-3 order-1 md:order-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold">راهنمای خرید از دیجی‌کالا</h3>
                <ul className="mt-2 space-y-2">
                  <li>نحوه ثبت سفارش</li>
                  <li>رویه ارسال سفارش</li>
                  <li>شیوه‌های پرداخت</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold">خدمات مشتریان</h3>
                <ul className="mt-2 space-y-2">
                  <li>پاسخ به پرسش‌های متداول</li>
                  <li>رویه‌های بازگرداندن کالا</li>
                  <li>شرایط استفاده</li>
                  <li>حریم خصوصی</li>
                  <li>گزارش باگ</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold">با دیجی‌کالا</h3>
                <ul className="mt-2 space-y-2">
                  <li>اتاق خبر دیجی‌کالا</li>
                  <li>فروش در دیجی‌کالا</li>
                  <li>فرصت‌های شغلی</li>
                  <li>گزارش تخلف در دیجی‌کالا</li>
                  <li>درباره دیجی‌کالا</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  