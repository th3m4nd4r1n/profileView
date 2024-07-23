import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Profile(){
  return(
    <>
    <div className="navbar">
      
      <span className='frosh_logo'></span>
    </div>
    <div className='container'>
      <span className='profile_img'></span>
      <p className='info'>
        <h1>NAME: RITESH KAPOOR</h1> <br />
        <h2>APPLICATION NUMBER: 114920</h2><br />
        <h2>HOOD: BLUE</h2><br />
        <h2>BRANCH: CIE</h2>
      </p>
      <span className='qr_code'></span>
    </div>
    </>
  )

  
}

function App() {
  

  return (
    <>
      
   <Profile />

    </>
  )
}

export default App
