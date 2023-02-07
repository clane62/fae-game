import { Link } from 'react-router-dom'
import InsultGenerator from './InsultGenerator'
import Trivia from './Trivia';


function One() {
  return (
    <section>
      <div className='nextLevel' hidden={true}>
        <Link to='/Two'>Next Level</Link>
      </div>
      <InsultGenerator />
      <Trivia />
    </section>
  )
}

export default One;
