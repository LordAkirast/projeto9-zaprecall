import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import './assets/css/reset.css'
// import '"./assets/css/style.css"'
///descobrir como usar styled components
import "./index.css"
import { useState } from 'react'
import Questions from './Questions'
import Footer from './Footer'







const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  

 
  <>
  
  <div className='screen'>
    <div className='logo'>
    <img src="./assets/img/logo.png" alt="ZapRecall"/> ZapRecall
    </div>
    <div className='questions'>
      <Questions/>
    
    </div>
    

  </div>
  
  </>
)



