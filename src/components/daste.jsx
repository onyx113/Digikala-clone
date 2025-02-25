export default function Daste(){
    return(
        <div className='w-35 space-y-5 absolute group-hover:block pb-3 pt-3 bg-white -z-50'>
            <ul>
                <li className='group hover:bg-gray-100 text-right cursor-pointer transition-colors duration-200'>
                    <ul className='absolute right-0 top-0 hidden group-hover:block bg-white shadow-lg w-48'>
                        <li className='group/inner px-4 py-2 hover:text-red-500  hover:bg-gray-100'>
                            1تست
                            <ul className='absolute right-full top-0 hidden group-hover/inner:block bg-white shadow-lg w-48'>
                                <li className='px-4 py-2 hover:bg-gray-100'>زیر منوی تست</li>
                                
                                <li className='px-4 py-2 hover:bg-gray-100'>آیتم سوم</li>
                            </ul>
                        </li>
                        <li className='group/inner px-4 py-2 hover:text-red-500  hover:bg-gray-100'>
                            2تست
                            <ul className='absolute right-full top-0 hidden group-hover/inner:block bg-white shadow-lg w-48'>
                                <li className='px-4 py-2 hover:bg-gray-100'>زیر منوی تست</li>
                                <li className='px-4 py-2 hover:bg-gray-100'>آیتم دوم</li>
                                <li className='px-4 py-2 hover:bg-gray-100'>آیتم سوم</li>
                            </ul>
                        </li>
                        <li className='group/inner px-4 py-2 hover:text-red-500  hover:bg-gray-100'>
                            3تست
                            <ul className='absolute right-full top-0 hidden group-hover/inner:block bg-white shadow-lg w-400'>
                            <div className='mt-10 container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6'>
        
        <div >
            <h2 className='text-lg font-bold text-red-500 border-r-2 border-red-500 pb-2'>داغ‌ترین‌ها</h2>
            <ul className='mt-2 space-y-1 text-gray-700'>
                <li>گوشی سامسونگ S25</li>
                <li>آیفون 16</li>
                <li>آیفون 16 پرو مکس</li>
                <li>شیائومی نوت 14</li>
                <li>شارژر فندکی</li>
                <li>هولدر گردنی</li>
                <li>آیفون 13</li>
                <li>آیفون 12</li>
                <li>آیفون 11</li>
                <li>گوشی سامسونگ سری Z</li>
            </ul>
        </div>
        
        
        <div>
            <h2 className='text-lg font-bold text-red-500 border-r-2 border-red-500 pb-2'>لوازم جانبی موبایل</h2>
            <ul className='mt-2 space-y-1 text-gray-700'>
                <li>شارژر گوشی</li>
                <li>شارژر وایرلس</li>
                <li>قاب و کاور گوشی</li>
                <li>گلس گوشی</li>
                <li>هولدر گوشی موبایل</li>
                <li>کابل شارژ و مبدل</li>
                <li>پاوربانک (شارژر همراه)</li>
            </ul>
        </div>

        
        <div>
            <h2 className='text-lg font-bold text-red-500 border-r-2 border-red-500 pb-2'>گوشی براساس قیمت</h2>
            <ul className='mt-2 space-y-1 text-gray-700'>
                <li>گوشی ارزان</li>
                <li>گوشی موبایل قسطی</li>
                <li>گوشی تا ۲ میلیون تومان</li>
                <li>گوشی تا ۵ میلیون تومان</li>
                <li>گوشی تا ۷ میلیون تومان</li>
                <li>گوشی تا ۱۵ میلیون تومان</li>
                <li>گوشی بالای ۱۵ میلیون تومان</li>
            </ul>
        </div>

        
        <div>
            <h2 className='text-lg font-bold text-red-500 border-r-2 border-red-500 pb-2'>برندهای مختلف گوشی موبایل</h2>
            <ul className='mt-2 space-y-1 text-gray-700'>
                <li>گوشی آیفون</li>
                <li>گوشی سامسونگ</li>
                <li>گوشی شیائومی</li>
                <li>گوشی نوکیا</li>
                <li>گوشی آنر</li>
                <li>گوشی ناتینگ فون</li>
                <li>گوشی ریلمی</li>
                <li>گوشی موتورولا</li>
                <li>گوشی تی‌سی‌ال</li>
                <li>گوشی هواوی</li>
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