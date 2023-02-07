import { useState } from 'react'

function Trivia() {
  let [getQuestion, setGetQuestion] = useState([])
  let [answer, setAnswer] = useState([])
  let [answer1, setanswer1] = useState([])
  let [answer2, setanswer2] = useState([])
  let [answer3, setanswer3] = useState([])
  let [answer4, setanswer4] = useState([])
  let [answerOutput, setanswerOutput] = useState([])


  async function getQuest(event) {
    setanswerOutput([])

    let allAnswers = []
    let verifiedQuestion = []
    let verifiedAnswers = []


    const res = await fetch(`https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple`)
    const data = await res.json()
    const question = data.results[0].question
    const answer = data.results[0].correct_answer
    const incorrectAnswers = data.results[0].incorrect_answers

    allAnswers.push(incorrectAnswers)
    allAnswers[0].push(answer)

    let sortedAnswers = allAnswers[0].sort()

    if ((question.includes(';', '#', '&') === true) || (sortedAnswers.includes(';', '#', '&', '039') === true)) {
      getQuest()
    } else {
      verifiedQuestion.push(question)
      verifiedAnswers.push(sortedAnswers)
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

  function checkAnswer1() {
    if (answer1 === answer) {
      setanswerOutput("CORRECT")
      document.querySelector(".nextLevel").hidden = false
    } else {
      setanswerOutput("WRONG")
    }
  }

  function checkAnswer2() {
    if (answer2 === answer) {
      setanswerOutput("CORRECT")
      document.querySelector(".nextLevel").hidden = false

    } else {
      setanswerOutput("WRONG")
    }
  }

  function checkAnswer3() {
    if (answer3 === answer) {
      setanswerOutput("CORRECT")
      document.querySelector(".nextLevel").hidden = false

    } else {
      setanswerOutput("WRONG")
    }
  }

  function checkAnswer4() {
    if (answer4 === answer) {
      setanswerOutput("CORRECT")
      document.querySelector(".nextLevel").hidden = false

    } else {
      setanswerOutput("WRONG")
    }
  }



  return (
    <div className='question'>
      <h1>Answer this question</h1>
      <button className='button' hidden={false} onClick={getQuest}>GET QUESTION</button>
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