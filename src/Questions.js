import { useState } from 'react'

function Questions() {
    const [clicado, setclicado] = useState(true)
    const cards = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript", number: "1" },
        { question: "O React é __", number: "2", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", number: "3", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", number: "4", answer: "expressões" },
    ]

    const setaStyle = {
        width: "20px",
        height: "23px"
    };

    return (

        <>
            <Question number="1" setaStyle={setaStyle} question="O que é JSX?" />
            <Question number="2" setaStyle={setaStyle} question="O que é JMA?" />
        </>
    )
}

function Question(props) {
    const [clicado, setclicado] = useState(true)

    if (clicado === true) {
        return (
            <div className='question' onClick={() => setclicado(false)}>Pergunta {props.number} <img style={props.setaStyle} src="./assets/img/seta_play.png" alt="Play" /></div>

        )
    } else {
        return (
            <div className='question' onClick={() => setclicado(true)}>{props.question}</div>
        )
    }
}



export default Questions