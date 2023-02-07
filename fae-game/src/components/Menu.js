import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InsultGenerator from './InsultGenerator'

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

  useEffect(() => {
    const interval = setInterval(() => {
      InsultGenerator()
    }, 1000);
    return () => clearInterval(interval)
  }, []);
  // 

  // const wait = time => new Promise(resolve => setTimeout(resolve, time))

  // wait(2000)
  //   .then(() => InsultGenerator())

  return (
    <div className='main-menu'>
      <h1>welcome to the fae game</h1>
      <InsultGenerator />
      <section>
        <Link to='/One'>Play Now</Link>
      </section>
      <button onClick={loadRules}>Rules</button>
      <div className="ruleOutput">{ruleOutput}</div>
    </div>
  )
}

export default Menu