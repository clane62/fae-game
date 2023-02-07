import { Link } from 'react-router-dom'
import InsultGenerator from './InsultGenerator'


function One() {
  return (
    <section>
      <Link to='/Two'>Next Level</Link>
      <InsultGenerator />
    </section>
  )
}

export default One;
