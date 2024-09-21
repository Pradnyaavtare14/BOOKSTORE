// import React from 'react'

import Banner from "../components/Banner"
import Footer from "../components/Footer"
import FreeBook from "../components/FreeBook"
import Navbar from "../components/Navbar"
import { ThemeProvider } from "../context/ThemeContext"

function Home() {
  return (
    <>

<div style={{backgroundColor:"#fff"}} >
    <ThemeProvider>
    <Navbar />
      <Banner/>
      <FreeBook/>
      <Footer/>
    </ThemeProvider>
      
      
     </div>
    </>
  )
}

export default Home