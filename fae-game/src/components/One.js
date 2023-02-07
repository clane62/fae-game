import { Link } from 'react-router-dom'
import InsultGenerator from './InsultGenerator'
import Trivia from './Trivia';


function One() {
  return (
    <section>
      <Link to='/Two'>Next Level</Link>
      <InsultGenerator />
      <Trivia />
    </section>
  )
}

export default One;
