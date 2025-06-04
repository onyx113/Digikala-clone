import { useState, useRef, Fragment } from 'react'
import './components/header'
import './App.css'
import { ChevronLeft, ChevronRight } from "lucide-react";

import Reels from './components/reels'
import Header1 from './components/header'
import BannerSlider from './components/banners'
import ProductSlider from './components/itemslist'
import Footer1 from './components/footer1'
import Tb from './components/tb'
import Tb2 from './components/tb2'

function App() {
  return (
    < >
      <Header1 />

    <div className='justify-items-center items-center'>
      <Tb/>
      </div> 
     <div className='justify-items-center items-center'>
      <Tb2/>
      </div>

      <BannerSlider/>
      <br/>
      <ProductSlider/>
      <br />
      <Footer1/>
      
    </>
  )
}

export default App
