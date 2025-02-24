

export default function Header1(){
    return(
        <header className='bg-cyan-950 font-medium text-1xl sticky top-0 flex p-3 justify-between h-18 items-center '>
      
      <div className=''>

      <a href='#' className='bg-green-600 rounded-sm transition delay-150 duration-300 ease-in-out m-1 p-1 '>login</a>

      </div>


        <div className='flex h-8/12 items-center w-200 gap-4'>

         <div className='h-15/12 bg-neutral-100 grow rounded-md px-0 flex'>

         <input className='w-full h-full text-right text-neutral-500' type="text" placeholder='جستجو' />

         <img className='flex cursor-pointer opacity-25 size-7 m-2' src="./src/images/search.svg" alt="search" />

         </div>

        <img  className='w-50 inline-block' src="./src/images/logo.svg" alt="digikala" />
       
        </div>
        

        
      </header>
    )
}