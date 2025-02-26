export default function Footer1() {
    return (
      <footer className="bg-gray-100 text-gray-700 p-8 text-right rtl">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <img src="/icons/original-product.png" alt="ضمانت اصل بودن کالا" className="w-12 h-12" />
            <p className="mt-2">ضمانت اصل بودن کالا</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/return-policy.png" alt="هفت روز ضمانت بازگشت کالا" className="w-12 h-12" />
            <p className="mt-2">هفت روز ضمانت بازگشت کالا</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/24-support.png" alt="۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم" className="w-12 h-12" />
            <p className="mt-2">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/cash-payment.png" alt="امکان پرداخت در محل" className="w-12 h-12" />
            <p className="mt-2">امکان پرداخت در محل</p>
          </div>
        </div>
        
        <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 order-2 md:order-1">
            <p className="font-bold">همراه ما باشید!</p>
            <div className="flex space-x-4 mt-2">
              <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
              <img src="/icons/twitter.png" alt="Twitter" className="w-6 h-6" />
              <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </div>
            <p className="mt-4">با ثبت ایمیل، از جدیدترین تخفیف‌ها باخبر شوید</p>
            <div className="flex mt-2">
              <input type="email" placeholder="ایمیل شما" className="border p-2 rounded-lg" />
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">ثبت</button>
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
  