import { useState } from 'react'
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './Components/CommonComponents/Navbar'
import SignIn from './AuthPages/SignIn'
import SignUp from './AuthPages/SignUp'

function App() {
 

  return (
    <>
     <Navbar/>
     <Routes>

      <Route path='/sign-in' element={<SignIn/>}/>

      <Route path='/sign-up' element={<SignUp/>}/>

      <Route path='/' element={<HomePage/>}/>

     </Routes>
    
     
    </>
  )
}

export default App
