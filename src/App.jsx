import { useState } from 'react'
import './components/header'
import './App.css'
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Header1 from './components/header'
import Reels from './components/reels'


function App() {
  


  return (
    <>
      
      
      <Header1/>
      
      <Reels />
      

      <p className='text-9xl  bg-white '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore officia accusamus, tenetur esse, distinctio velit officiis nihil voluptatem iusto odit perferendis! Facilis tempore ad numquam adipisci at, consequuntur vel qui!Lorem</p>
      
      

    
    </>
  )
}

export default App
