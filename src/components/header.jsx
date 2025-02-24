

export default function Header1(){
    return(
        <header className='bg-cyan-950 font-medium text-1xl sticky top-0 flex p-3 justify-between h-18 items-center '>
      
      <div className='flex gap-5 w-2/12 items-center  '>

      <img className='cursor-pointer '   src="./src/images/sabad.svg" alt="sabad-kharid" />

      <a href='#' className='inline-flex p-3 gap-2 h-9 border-2 border-gray-400 items-center rounded-md'>
        <button className='cursor-pointer opacity-90'>ورود | ثبت نام</button>
        <img className='opacity-60 w-5' src="./src/images/login.svg" alt="arrow-down" />
      </a>

      </div>


        <div className='flex h-8/12 items-center w-8/12 gap-4'>

         <div className='h-15/12 bg-neutral-100 grow rounded-md px-0 flex'>

         <input className='w-full h-full text-right text-neutral-500' type="text" placeholder='جستجو' />

         <img className='flex cursor-pointer opacity-25 size-7 m-2' src="./src/images/search.svg" alt="search" />

         </div>

        <img  className='w-50 inline-block' src="./src/images/logo.svg" alt="digikala" />
       
        </div>
        

        
      </header>
    )
}