import { useState } from 'react'
import './components/header'
import './App.css'
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Header1 from './components/header'
import Reels from './components/reels'
import BannerSlider from './components/banners'
import ProductSlider from './components/itemslist'
import Footer1 from './components/footer1'
function App() {
  


  return (
    <>
      
      
      <Header1 />
      
      <Reels />
      <br/>
      <BannerSlider/>
      <br/>

      <ProductSlider/>
<br />
      <Footer1/>
      
      

    
    </>
  )
}

export default App
