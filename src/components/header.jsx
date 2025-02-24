

export default function Header1(){
    return(
        <header className='bg-cyan-950 font-medium text-1xl sticky top-0 flex p-3 justify-between h-15 items-center '>
      
      <div className=''>
      <a href='#' className='bg-green-600 rounded-sm transition delay-150 duration-300 ease-in-out m-1 p-1 '>login</a>
      </div>

        <div className='flex items-center w-200 gap-4'>

        <div className=' bg-neutral-100 grow rounded px-0 lg:px-4 text-body-2'>
         <input className='w-full h-full text-right text-neutral-500' type="text" placeholder='جستجو ' />
        </div>
        <img  className='w-50 inline-block' src="./src/images/logo.svg" alt="digikala" />
       
        </div>
        

        
      </header>
    )
}