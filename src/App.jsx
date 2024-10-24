import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Test1 from './Components/Test/Test1'
import LowerHeader from './Components/Header/LowerHeader'
import Carousel from './Components/Carousel/Carousel'


function App() {
  
  return (
    <>
      <div>
        <Header/>
        <Carousel/>

        {/* <LowerHeader/> */}
        {/* <Test1/> */}
        
      </div>
    </>
  )
}

export default App
