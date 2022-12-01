import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import './assets/css/reset.css'
// import '"./assets/css/style.css"'
///descobrir como usar styled components
import "./index.css"


const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript", number: "1"},
	{ question: "O React é __", number: "2", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", number: "3", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", number: "4", answer: "expressões" },
]

const setaStyle = {
  width: "20px",
  height: "23px"
};

let i = 0;

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  
  <>
  <div className='screen'>
    <div className='logo'>
    <img src="./assets/img/logo.png" alt="ZapRecall"/> ZapRecall
    </div>
    <div className='questions'>
      {cards.map((card) => <div className='question'>Pergunta {card.number} <img style={setaStyle} src="./assets/img/seta_play.png" alt="Play"/></div> )}
    </div>
    

  </div>
  <footer>Concluídas 0/4</footer>
  </>
)

