import { useState } from 'react'
import Footer from './Footer'

function Questions() {
    const [clicado, setclicado] = useState(1)
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

    const [qtd, setqtd] = useState(0)

    return (
        <>
            <div className='questions'>
                <>
                    <Question number="Pergunta 1" setaStyle={setaStyle} classCorrect="correct" classAlmost="almost" classWrong="wrong" classQ="question" classA="answer" question="O que significa 'emia'?" answer="'emia' significa Presente no Sangue." />
                    <Question number="Pergunta 2" setaStyle={setaStyle} classCorrect="correct" classAlmost="almost" classWrong="wrong" classQ="question" classA="answer" question="Qual é a música da vida?" answer="Silence, Brother." />
                    <Question number="Pergunta 3" setaStyle={setaStyle} classCorrect="correct" classAlmost="almost" classWrong="wrong" classQ="question" classA="answer" question="Um pêssego pode derrotar Tai Lung?" answer="Talvez possa, se você estiver disposto a treiná-lo." />
                    <Question number="Pergunta 4" setaStyle={setaStyle} classCorrect="correct" classAlmost="almost" classWrong="wrong" classQ="question" classA="answer" question="Quais são as formas de detectar um sonho lúcido?" answer="Olhar para as mãos. Espelhos. Teste de Realidade." />
                </>
            </div>
            <Footer qtd={qtd}/>
        </>

    )
}

function Question(props) {
    const [clicado, setclicado] = useState(0)

    if (clicado === 0) {
        return (
            <div data-test="flashcard" className={props.classQ} ><p data-test="flashcard-text">{props.number}</p> <img onClick={() => setclicado(1)} data-test="play-btn" style={props.setaStyle} src="./assets/img/seta_play.png" alt="Play" /></div>

        )
    } else if (clicado === 1) {
        return (

            <div className={props.classA} ><p data-test="flashcard-text">{props.question}</p> <img data-test="turn-btn" onClick={() => setclicado(2)} style={props.setaStyle} src="./assets/img/seta_virar.png" alt="Virar" /> </div>
        )
    } else if (clicado === 2) {
        return (
            <>

                <div className={props.classA} ><p data-test="flashcard-text">{props.answer}</p> <button data-test="no-icon" className='dontRemember' onClick={() => setclicado(3)}>Não lembrei</button> <button data-test="partial-icon" onClick={() => setclicado(4)} className='almostRemember'>Quase Não lembrei</button> <button data-test="zap-icon" onClick={() => setclicado(5)} className='Remember'>Zap</button>

                </div>
            </>
        )

    } else if (clicado === 3) {
        return (
            <>

                <div className={props.classWrong} >{props.number} <img style={props.setaStyle} src="./assets/img/icone_erro.png" alt="erro" />  </div>
            </>
        )

    } else if (clicado === 4) {
        return (
            <>

                <div className={props.classAlmost} >{props.number} <img style={props.setaStyle} src="./assets/img/icone_quase.png" alt="quase" />  </div>
            </>
        )

    } else if (clicado === 5) {
        return (
            <>

                <div className={props.classCorrect} >{props.number} <img style={props.setaStyle} src="./assets/img/icone_certo.png" alt="certo" />  </div>
            </>
        )

    }
}


export default Questions