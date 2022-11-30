import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import './assets/css/reset.css'
// import '"./assets/css/style.css"'
///descobrir como usar styled components
import "./index.css"


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
  <div className='screen'>
    <div className='logo'>
    <img src="./assets/img/logo.png" alt="ZapRecall"/> ZapRecall
    </div>
    <div className='questions'>
    <div className='question'>Pergunta 1</div>
    </div>
    

  </div>
  <footer>Concluídas 0/4</footer>
  </>
)

