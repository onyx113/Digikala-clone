

export default function Header1(){
    return(
        <header className='bg-cyan-950 font-medium text-1xl sticky top-0 flex p-3 justify-between h-15 items-center '>
      
      <div className=''>
      <a href='#' className='bg-green-600 rounded-sm transition delay-150 duration-300 ease-in-out m-1 p-1 '>login</a>
      </div>

        <div className=''>
        <img src="./images/logo.svg" alt="" />
        </div>

        
      </header>
    )
}