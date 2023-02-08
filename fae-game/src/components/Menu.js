import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InsultGenerator from './InsultGenerator'
import './Menu.scss'
import './Insult.scss'
import speech1 from './images/speechBubble1.png'
import speech2 from './images/speechBubble2.png'

function Menu() {
  let [ruleOutput, setRuleOutput] = useState([])
  let [counter, setCounter] = useState(0)


  const section = document.querySelector('section')
  section.hidden = true


  const loadRules = (event) => {
    if (counter === 0) {
      setRuleOutput("Answer questions correctly to win crystals. You'll be able to use your crystals to throw at the mean fae.")
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


  return (
    <div className='main-menu'>

      <div className='allInsults'>
        <div className='speech1'>
          <img src={speech1} alt="" />
          <div className='insult1'>
            <InsultGenerator />
          </div>
        </div>

        <div className='speech2'>
          <img src={speech2} alt="" />
          <div className='insult2'>
            <InsultGenerator />
          </div>
        </div>
      </div>
      <h1>welcome to the fae forest</h1>
      <section>
        <Link className="link" to='/One'>Play Now</Link>
      </section>
      <button onClick={loadRules}>Rules</button>
      <div className="ruleOutput">{ruleOutput}</div>

    </div>
  )
}

export default Menu