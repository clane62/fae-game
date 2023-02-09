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
      setRuleOutput(
        <div className='rulediv'>
          <p>Move through the game answering trivia questions.</p>
          <p>For each correct answer you gain a crystal.</p>
          <p>Once you have enough crystals, you can throw them at the fae so they'll leave you alone.</p>
        </div>)
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
      <h1>You've entered the forest of the fae.</h1>
      <h3>The fae are mean and don't like outsiders.</h3>
      <section>
        <Link className="link" to='/One'>Play Now</Link>
      </section>
      <button onClick={loadRules}>Rules</button>
      <div className="ruleOutput">{ruleOutput}</div>

    </div>
  )
}

export default Menu