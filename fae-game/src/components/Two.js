import { Link } from 'react-router-dom'
import InsultGenerator from './InsultGenerator'
import Trivia from './Trivia';


function Two() {
  return (
    <section>
      <div className='nextLevel' hidden={true}>
        <Link to='/Three'>Next Level</Link>
      </div>
      <InsultGenerator />
      <Trivia />
    </section>
  )
}

export default Two;