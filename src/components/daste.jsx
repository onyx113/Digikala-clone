export default function Daste(){
    return(
        <div className='w-35 space-y-5 absolute group-hover:block pb-3 pt-3 '>
            <ul>
                <li className='group hover:bg-gray-100 text-right cursor-pointer transition-colors duration-200'>
                    <ul className='absolute right-0 top-0 hidden group-hover:block bg-white shadow-lg w-48'>
                        <li className='group/inner px-4 py-2 hover:text-red-500  hover:bg-gray-100'>
                            مد و پوشاک
                            <ul className='absolute right-full top-0 hidden group-hover/inner:block bg-white shadow-lg w-200'>
                                <div className='mt-10 container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6'>
                                    <div>
                                        <h2 className='text-lg font-bold text-black border-r-2 hover:text-red-500 border-red-500 pb-2'>محصولات جدید</h2>
                                        <ul className='mt-2 space-y-1 text-gray-700'>
                                            <li className='hover:text-red-500'>پیراهن مردانه</li>
                                            <li className='hover:text-red-500'>شلوار جین</li>
                                            <li className='hover:text-red-500'>کفش ورزشی</li>
                                            <li className='hover:text-red-500'>کیف دستی زنانه</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-bold text-black border-r-2 hover:text-red-500 border-red-500 pb-2'>لوازم جانبی مد</h2>
                                        <ul className='mt-2 space-y-1 text-gray-700'>
                                            <li className='hover:text-red-500'>کمربند</li>
                                            <li className='hover:text-red-500'>کلاه</li>
                                            <li className='hover:text-red-500'>عینک آفتابی</li>
                                            <li className='hover:text-red-500'>ساعت مچی</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-bold text-black border-r-2 hover:text-red-500 border-red-500 pb-2'>محصولات براساس قیمت</h2>
                                        <ul className='mt-2 space-y-1 text-gray-700'>
                                            <li className='hover:text-red-500'>محصولات ارزان</li>
                                            <li className='hover:text-red-500'>محصولات تا ۵۰۰ هزار تومان</li>
                                            <li className='hover:text-red-500'>محصولات تا ۱ میلیون تومان</li>
                                            <li className='hover:text-red-500'>محصولات بالای ۱ میلیون تومان</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-bold text-black border-r-2 hover:text-red-500 border-red-500 pb-2'>برندهای مختلف مد</h2>
                                        <ul className='mt-2 space-y-1 text-gray-700'>
                                            <li className='hover:text-red-500'>برند نایک</li>
                                            <li className='hover:text-red-500'>برند آدیداس</li>
                                            <li className='hover:text-red-500'>برند زارا</li>
                                            <li className='hover:text-red-500'>برند گوچی</li>
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className='group/inner px-4 py-2 hover:text-red-500  hover:bg-gray-100'>
                            کالای دیجیتال
                            <ul className='absolute right-full top-0 hidden group-hover/inner:block bg-white shadow-lg w-200'>
                                <div className='mt-10 container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6'>
                                    <div>
                                        <h2 className='text-lg font-bold text-black border-r-2 hover:text-red-500 border-red-500 pb-2'>محصولات جدید</h2>
                                        <ul className='mt-2 space-y-1 text-gray-700'>
                                            <li className='hover:text-red-500'>لپ‌تاپ گیمینگ</li>
                                            <li className='hover:text-red-500'>تبلت سامسونگ</li>
                                            <li className='hover:text-red-500'>دوربین دیجیتال</li>
                                            <li className='hover:text-red-500'>هدفون بی‌سیم</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-bold text-black border-r-2 hover:text-red-500 border-red-500 pb-2'>لوازم جانبی دیجیتال</h2>
                                        <ul className='mt-2 space-y-1 text-gray-700'>
                                            <li className='hover:text-red-500'>کیبورد مکانیکی</li>
                                            <li className='hover:text-red-500'>ماوس گیمینگ</li>
                                            <li className='hover:text-red-500'>پاوربانک</li>
                                            <li className='hover:text-red-500'>کابل HDMI</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-bold text-black border-r-2 hover:text-red-500 border-red-500 pb-2'>محصولات براساس قیمت</h2>
                                        <ul className='mt-2 space-y-1 text-gray-700'>
                                            <li className='hover:text-red-500'>محصولات ارزان</li>
                                            <li className='hover:text-red-500'>محصولات تا ۱ میلیون تومان</li>
                                            <li className='hover:text-red-500'>محصولات تا ۳ میلیون تومان</li>
                                            <li className='hover:text-red-500'>محصولات بالای ۳ میلیون تومان</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-bold text-black border-r-2 hover:text-red-500 border-red-500 pb-2'>برندهای مختلف دیجیتال</h2>
                                        <ul className='mt-2 space-y-1 text-gray-700'>
                                            <li className='hover:text-red-500'>برند اپل</li>
                                            <li className='hover:text-red-500'>برند سامسونگ</li>
                                            <li className='hover:text-red-500'>برند سونی</li>
                                            <li className='hover:text-red-500'>برند ال‌جی</li>
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className=' group/inner px-4 py-2 hover:text-red-500  hover:bg-gray-100'>
                            موبایل
                            <ul className='absolute right-full top-0 hidden group-hover/inner:block bg-white shadow-lg w-200'>
                            <div className='mt-10 container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6'>
        
        <div >
            <h2 className='text-lg font-bold text-black border-r-2 hover:text-red-500 border-red-500 pb-2'>داغ‌ترین‌ها</h2>
            <ul className='mt-2  space-y-1 text-gray-700'>
                <li className='hover:text-red-500'>گوشی سامسونگ S25</li>
                <li className='hover:text-red-500'>آیفون 16</li>
                <li className='hover:text-red-500'>آیفون 16 پرو مکس</li>
                <li className='hover:text-red-500'>شیائومی نوت 14</li>
                <li className='hover:text-red-500'>شارژر فندکی</li>
                <li className='hover:text-red-500'>هولدر گردنی</li>
                <li className='hover:text-red-500'>آیفون 13</li>
                <li className='hover:text-red-500'>آیفون 12</li>
                <li className='hover:text-red-500'>آیفون 11</li>
                <li className='hover:text-red-500'>گوشی سامسونگ سری z-2</li>
            </ul>
        </div>
        
        
        <div>
            <h2 className='text-lg font-bold text-black border-r-2 hover:text-red-500 border-red-500 pb-2'>لوازم جانبی موبایل</h2>
            <ul className='mt-2 space-y-1 text-gray-700'>
                <li className='hover:text-red-500'>شارژر گوشی</li>
                <li className='hover:text-red-500'>شارژر وایرلس</li>
                <li className='hover:text-red-500'>قاب و کاور گوشی</li>
                <li className='hover:text-red-500'>گلس گوشی</li>
                <li className='hover:text-red-500'>هولدر گوشی موبایل</li>
                <li className='hover:text-red-500'>کابل شارژ و مبدل</li>
                <li className='hover:text-red-500'>پاوربانک (شارژر همراه)</li>
            </ul>
        </div>

        
        <div>
            <h2 className='text-lg font-bold text-black border-r-2 hover:text-red-500 border-red-500 pb-2'>گوشی براساس قیمت</h2>
            <ul className='mt-2 space-y-1 text-gray-700'>
                <li className='hover:text-red-500'>گوشی ارزان</li>
                <li className='hover:text-red-500'>گوشی موبایل قسطی</li>
                <li className='hover:text-red-500'>گوشی تا ۲ میلیون تومان</li>
                <li className='hover:text-red-500'>گوشی تا ۵ میلیون تومان</li>
                <li className='hover:text-red-500'>گوشی تا ۷ میلیون تومان</li>
                <li className='hover:text-red-500'>گوشی تا ۱۵ میلیون تومان</li>
                <li className='hover:text-red-500'>گوشی بالای ۱۵ میلیون تومان</li>
            </ul>
        </div>

        
        <div>
            <h2 className='text-lg font-bold text-black border-r-2 hover:text-red-500 border-red-500 pb-2'>برندهای مختلف گوشی موبایل</h2>
            <ul className='mt-2 space-y-1 text-gray-700'>
                <li className='hover:text-red-500'>گوشی آیفون</li>
                <li className='hover:text-red-500'>گوشی سامسونگ</li>
                <li className='hover:text-red-500'>گوشی شیائومی</li>
                <li className='hover:text-red-500'>گوشی نوکیا</li>
                <li className='hover:text-red-500'>گوشی آنر</li>
                <li className='hover:text-red-500'>گوشی ناتینگ فون</li>
                <li className='hover:text-red-500'>گوشی ریلمی</li>
                <li className='hover:text-red-500'>گوشی موتورولا</li>
                <li className='hover:text-red-500'>گوشی تی‌سی‌ال</li>
                <li className='hover:text-red-500'>گوشی هواوی</li>
            </ul>
        </div>
    </div>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}


