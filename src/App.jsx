import { useState, useRef } from 'react'
import './components/header'
import './App.css'
import { ChevronLeft, ChevronRight } from "lucide-react";

import Reels from './components/reels'
import Header1 from './components/header'
import BannerSlider from './components/banners'
import ProductSlider from './components/itemslist'
import Footer1 from './components/footer1'

function App() {
  return (
    <>
      <Header1 />
      <Reels />
      
      <BannerSlider/>
      <br/>
      <ProductSlider/>
      <br />
      <Footer1/>
    </>
  )
}

export default App
