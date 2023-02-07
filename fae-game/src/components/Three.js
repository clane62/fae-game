import { Link } from 'react-router-dom'
import InsultGenerator from './InsultGenerator'
import Trivia from './Trivia';



function Three() {
  return (
    <section>
      <div className='nextLevel' hidden={true}>
        <Link to='/Finished'>end it</Link>
      </div>
      <InsultGenerator />
      <Trivia />
    </section>
  )
}

export default Three;