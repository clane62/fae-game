import { Link } from 'react-router-dom'
import InsultGenerator from './InsultGenerator'
import Trivia from './Trivia';
import crystal1 from './images/crystal1white.png'
import crystal2 from './images/crystal2white.png'
import crystal3 from './images/crystal3white.png'
import crystal4 from './images/crystal4white.png'
import crystal5 from './images/crystal5white.png'
import './Insult.scss'
import speech1 from './images/speechBubble1.png'
import speech2 from './images/speechBubble2.png'


function Four() {
  return (
    <section>
      <div className='nextLevel' hidden={true}>
        <Link to='/Five'>Next Level</Link>
      </div>
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
      <Trivia />
      <div className='crystal-display' hidden={true}>
        <div className="crystal1" >
          <img src={crystal1} alt="" />
        </div>
        <div className="crystal2" >
          <img src={crystal2} alt="" />
        </div>
        <div className="crystal3" >
          <img src={crystal3} alt="" />
        </div>
        <div className="crystal4" >
          <img src={crystal4} alt="" />
        </div>
        <div className="crystal5" hidden={true}>
          <img src={crystal5} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Four;