import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import One from './One'

function Menu() {
  let [ruleOutput, setRuleOutput] = useState([])
  let [counter, setCounter] = useState(0)


  const section = document.querySelector('section')
  section.hidden = true

  const loadRules = (event) => {
    if (counter === 0) {
      setRuleOutput("Rules display here")
      setCounter(1)
    } else {
      setRuleOutput([])
      setCounter(0)
    }
  }

  return (
    <div className='main-menu'>
      <h1>welcome to the fae game</h1>
      <section>
        <Link to='/One'>Play Now</Link>
      </section>
      <Routes>
        <Route path='/One' element={<One />} />
      </Routes>
      <button onClick={loadRules}>Rules</button>
      <div className="ruleOutput">{ruleOutput}</div>
    </div>
  )
}

export default Menu