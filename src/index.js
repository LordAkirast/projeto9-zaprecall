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
import styled from 'styled-components'


const QuestionsStyle = styled.div`
.questions {
  margin-top: 50px;
  display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    align-items: center;
    margin-top: 25px;
    font-family: Righteous;
}


.question {
  width: 300px;
  height: 65px;
  background-color: white;
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Righteous;
}

.answer {
  width: 300px;
  height: 130px;
  background-color: white;
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  font-family: Righteous;
}`;


const FooterStyle = styled.div`
footer {
  width: 375px;
  height: 70px;
  background-color: red;
  margin-top: 100px;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  font-family: Righteous;
}`;


const ScreenStyle = styled.div`
body {
  margin: 0;
  font-family: righteous;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.screen {
  width: 375px;
  height: 597px;
  background-color: #FB6B6B;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
}


.screen::-webkit-scrollbar {
  display: none;
}

.logo {
  width: 255px;
  height: 60px;
  margin-top: 50px;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  font-size: 36px;
  font-weight: 400;
  color: white;
  font-family: Righteous;
}


img {
  width: 60px;
  height: 60px;
}

img:hover {
  cursor: pointer;
}

.dontRemember {
  width: 85px;
  height: 37px;
  background-color: #FF3030;
}

.almostRemember {
  width: 85px;
  height: 37px;
  background-color: #FF922E;
}

.Remember {
  width: 85px;
  height: 37px;
  background-color: #2FBE34;
}

.wrong {
  width: 300px;
  height: 65px;
  background-color: white;
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  color: red;
  text-decoration: line-through;
}

.almost {
  width: 300px;
  height: 65px;
  background-color: white;
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #FF922E;
  text-decoration: line-through;
}

.correct {
  width: 300px;
  height: 65px;
  background-color: white;
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #2FBE34;
  text-decoration: line-through;

}`;



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(



  <>
    <ScreenStyle>
      <div className='screen'>
        <div className='logo'>
          <img src="./assets/img/logo.png" alt="ZapRecall" /> ZapRecall
        </div>
        <div className='questions'>

          <QuestionsStyle>
            <FooterStyle>
              <Questions />
            </FooterStyle>
          </QuestionsStyle>



        </div>


      </div>
    </ScreenStyle>

  </>
)



