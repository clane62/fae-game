import { Link } from 'react-router-dom'
import InsultGenerator from './InsultGenerator'


function Two() {
  return (
    <section>
      <Link to='/Three'>Next Level</Link>
      <InsultGenerator />
    </section>
  )
}

export default Two;