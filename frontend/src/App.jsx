import { useState } from 'react'
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './Components/CommonComponents/Navbar'

function App() {
 

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
     </Routes>
    
     
    </>
  )
}

export default App
