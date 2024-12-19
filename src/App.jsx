import React from 'react'
import NavBar from './NavBar'
import Homepage from './Pages/Homepage'
import { Routes,Route } from 'react-router-dom'
import Aboutpage from './Pages/Aboutpage'
import SkillsPage from './Pages/SkillsPage'
import ResumePage from './Pages/ResumePage'
import ContactPage from './Pages/ContactPage'

const App = () => {
  return (

   <>
   <NavBar/>
     <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="about" element={<Aboutpage/>}/>
        <Route path="skills" element={<SkillsPage/>}/>
        <Route path="resume" element={<ResumePage/>}/>
        <Route path="contact" element={<ContactPage/>}/>
      </Routes>
     </div>
   </>
  )
}

export default App