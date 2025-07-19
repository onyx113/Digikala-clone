import Daste from './daste';

export default function Header1(){
    return(
      <header className='shadow-lg bg-white font-Dana'>
        <div className='fixed bg-white left-0 right-0 z-50 font-medium text-1xl  top-0 flex p-3 justify-between h-18 items-center  '>
      
      <div className='flex gap-5 w-2/12 items-center  '>

      <img className='cursor-pointer '   src="./src/images/sabad.svg" alt="sabad-kharid" />

      <a href='#' className='inline-flex p-3 gap-2 h-9 border-2 border-gray-400 items-center rounded-md'>
        <button className='cursor-pointer opacity-90'>ورود | ثبت نام</button>
        <img className='opacity-60 w-5' src="./src/images/login.svg" alt="arrow-down" />
      </a>

      </div>


        <div className='  flex h-8/12 items-center w-7/12 gap-4'>

         <div className='h-15/12 bg-neutral-100 grow rounded-md px-0 flex'>

         <input className='w-full h-full text-right text-neutral-500 items-center justify-center flex focus:outline-0 ' type="text" placeholder='جستجو' />

         <img className='flex cursor-pointer opacity-25 size-7 m-2' src="./src/images/search.svg" alt="search" />

         </div>

        <img  className='cursor-pointer w-50 inline-block' src="./src/images/logo.svg" alt="digikala" />
       
        </div>
        
      
      </div>

      <nav className='flex top-0 sticky gap-5 text-right items-center pr-3 w-full mt-18 p-2 shadow-lg ' dir="rtl">
        <span className=' group opacity-85 cursor-pointer relative after:content-[""] after:absolute after:w-full after:h-0.5 hover:after:bg-red-600 after:right-0 after:top-[2rem] after:transition-all after:duration-300'>دسته بندی کالاها
        
        <Daste/>

        </span>
        <div className=' z-100 inline-flex gap-4'>
          <div href='#' className='cursor-pointer relative after:content-[""] after:absolute after:w-full after:h-0.5 hover:after:bg-red-600 after:right-0 after:top-[2rem] after:transition-all after:duration-300 text-zinc-600 hover:text-black'>شگفت انگیز</div>
          <div href='#' className='cursor-pointer relative after:content-[""] after:absolute after:w-full after:h-0.5 hover:after:bg-red-600 after:right-0 after:top-[2rem] after:transition-all after:duration-300 text-zinc-600 hover:text-black'>سوپر مارکت</div>
          <div href='#' className='cursor-pointer relative after:content-[""] after:absolute after:w-full after:h-0.5 hover:after:bg-red-600 after:right-0 after:top-[2rem] after:transition-all after:duration-300 text-zinc-600 hover:text-black'>طلای دیجیتال</div>
          <div href='#' className='cursor-pointer relative after:content-[""] after:absolute after:w-full after:h-0.5 hover:after:bg-red-600 after:right-0 after:top-[2rem] after:transition-all after:duration-300 text-zinc-600 hover:text-black'>پرفروش ترینها</div>
          <div href='#' className='cursor-pointer relative after:content-[""] after:absolute after:w-full after:h-0.5 hover:after:bg-red-600 after:right-0 after:top-[2rem] after:transition-all after:duration-300 text-zinc-600 hover:text-black'>خرید کالا کارکرده</div>
        </div>
        </nav>
      

    
      </header>
    )
}