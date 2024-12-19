import React from 'react'
import nkdPdf from "../assets/NKD.png"
import Downlode from '../assets/downlode'
import "./Resume.css"


const ResumePage = () => {
        

  return (
  
<>
<h1 className='pageTitle'>RESUME</h1>
  <div className='resumePage'>
     
      <img src={nkdPdf} alt="NKD Resume" />
      <Downlode/>
      
    </div>

</>
  )
}

export default ResumePage