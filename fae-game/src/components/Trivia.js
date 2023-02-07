import { useState } from 'react'

function Trivia() {
  let [getQuestion, setGetQuestion] = useState([])
  let [answer, setAnswer] = useState([])
  let [answer1, setanswer1] = useState([])
  let [answer2, setanswer2] = useState([])
  let [answer3, setanswer3] = useState([])
  let [answer4, setanswer4] = useState([])


  async function getQuest(event) {
    let allAnswers = []

    const res = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple`)
    const data = await res.json()
    const question = data.results[0].question
    const answer = data.results[0].correct_answer
    const incorrectAnswers = data.results[0].incorrect_answers

    allAnswers.push(incorrectAnswers)
    allAnswers[0].push(answer)

    let sortedAnswers = allAnswers[0].sort()

    return (
      setGetQuestion(question),
      setAnswer(answer),
      setanswer1(sortedAnswers[0]),
      setanswer2(sortedAnswers[1]),
      setanswer3(sortedAnswers[2]),
      setanswer4(sortedAnswers[3])
    )

  }

  function checkAnswer1() {
    if (answer1 === answer) {
      console.log("CORRECT")
    } else {
      console.log("WRONG")
    }
  }

  function checkAnswer2() {
    if (answer2 === answer) {
      console.log("CORRECT")
    } else {
      console.log("WRONG")
    }
  }

  function checkAnswer3() {
    if (answer3 === answer) {
      console.log("CORRECT")
    } else {
      console.log("WRONG")
    }
  }

  function checkAnswer4() {
    if (answer4 === answer) {
      console.log("CORRECT")
    } else {
      console.log("WRONG")
    }
  }


  return (
    <div className='question'>
      <h1>Answer this question</h1>
      <button className='button' onClick={getQuest}>GET QUESTION</button>
      <p className='output'>{getQuestion}</p>
      <button onClick={checkAnswer1} className='answer1'>{answer1}</button>
      <button onClick={checkAnswer2} className='answer2'>{answer2}</button>
      <button onClick={checkAnswer3} className='answer3'>{answer3}</button>
      <button onClick={checkAnswer4} className='answer4'>{answer4}</button>

    </div>
  )
}

export default Trivia