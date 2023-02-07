import { Link } from 'react-router-dom'
import InsultGenerator from './InsultGenerator'


function Three() {
  return (
    <section>
      <Link to='/Finished'>end it</Link>
      <InsultGenerator />
    </section>
  )
}

export default Three;