import { render } from '@testing-library/react'
import { useState } from 'react'
// import { crystal1, crystal2, crystal3, crystal4, crystal5 } from './Crystals'
import Enter from './Enter'
import Bolt from './images/bolt.png'
import './Bolt.scss'

function Trivia() {
  let [getQuestion, setGetQuestion] = useState([])
  let [answer, setAnswer] = useState([])
  let [answer1, setanswer1] = useState([])
  let [answer2, setanswer2] = useState([])
  let [answer3, setanswer3] = useState([])
  let [answer4, setanswer4] = useState([])
  let [answerOutput, setanswerOutput] = useState([])
  let [crystals, setCrystals] = useState([])
  let [correctCount, setCorrectCount] = useState(1)



  async function getQuest(event) {
    setanswerOutput([])

    let allAnswers = []
    let verifiedQuestion = []
    let verifiedAnswers = []


    // api trivia call.
    const res = await fetch(`https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple`)
    const data = await res.json()
    const question = data.results[0].question
    const answer = data.results[0].correct_answer
    const incorrectAnswers = data.results[0].incorrect_answers

    // adding correct answer and decoy answers to the same array
    allAnswers.push(incorrectAnswers)
    allAnswers[0].push(answer)

    // sorting alphabetically so the answer is always in a different spot. 
    let sortedAnswers = allAnswers[0].sort()

    // verifiying data for poorly received questions/answers and pushing verified data to new variables. 
    if ((question.includes(';', '#', '&') === true) || (sortedAnswers.includes(';', '#', '&', '039') === true)) {
      getQuest()
    } else {
      verifiedQuestion.push(question)
      verifiedAnswers.push(sortedAnswers)
      document.querySelector(".question-button").hidden = true
    }

    return (
      setGetQuestion(verifiedQuestion),
      setAnswer(answer),
      setanswer1(verifiedAnswers[0][0]),
      setanswer2(verifiedAnswers[0][1]),
      setanswer3(verifiedAnswers[0][2]),
      setanswer4(verifiedAnswers[0][3])
    )

  }

  // check each answer is correct. 
  function checkAnswer1() {
    if (answer1 === answer) {
      setCorrectCount(correctCount = correctCount + 1)
      console.log(correctCount)
      addCrystal()
      setanswerOutput("CORRECT")
      document.querySelector(".nextLevel").hidden = false
    } else {
      setanswerOutput("WRONG")
      flashBolt()
    }
  }

  function checkAnswer2() {
    if (answer2 === answer) {
      setanswerOutput("CORRECT")
      document.querySelector(".nextLevel").hidden = false
      setCorrectCount(correctCount = correctCount + 1)
      console.log(correctCount)

      addCrystal()
    } else {
      setanswerOutput("WRONG")
      flashBolt()
    }
  }

  function checkAnswer3() {
    if (answer3 === answer) {
      setanswerOutput("CORRECT")
      document.querySelector(".nextLevel").hidden = false
      setCorrectCount(correctCount = correctCount + 1)
      console.log(correctCount)

      addCrystal()
    } else {
      setanswerOutput("WRONG")
      flashBolt()
    }
  }

  function checkAnswer4() {
    if (answer4 === answer) {
      setanswerOutput("CORRECT")
      document.querySelector(".nextLevel").hidden = false
      setCorrectCount(correctCount = correctCount + 1)
      console.log(correctCount)

      addCrystal()
    } else {
      setanswerOutput("WRONG")
      flashBolt()
    }
  }

  function addCrystal() {

    if (correctCount === 2) {
      document.querySelector(".crystal-display").hidden = false
    }
  }

  function flashBolt() {
    document.querySelector(".bolt").hidden = false
    // setTimeout(document.querySelector(".bolt").hidden = true, )
  }

  // function hideBolt() {
  //   document.querySelector(".bolt").hidden = true

  // }

  return (
    <div className='question'>
      <div className='bolt' hidden={true}>
        <img src={Bolt} alt="" />
      </div>
      <button className='question-button' hidden={false} onClick={getQuest}>GET QUESTION</button>
      <p className='question-output'>{getQuestion}</p>
      <p className='answer-output'>{answerOutput}</p>
      <button onClick={checkAnswer1} className='answer1'>{answer1}</button>
      <button onClick={checkAnswer2} className='answer2'>{answer2}</button>
      <button onClick={checkAnswer3} className='answer3'>{answer3}</button>
      <button onClick={checkAnswer4} className='answer4'>{answer4}</button>
    </div>
  )
}

export default Trivia