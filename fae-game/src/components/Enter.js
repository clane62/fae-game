import { Routes, Route, Link } from 'react-router-dom'
import Menu from './Menu'

function Enter() {

  return (
    <div>
      <section hidden={false}>
        <h1>FAE GAME</h1>
        <Link to='/menu'>ENTER</Link>
      </section>
      <Routes>
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </div>
  )
}
export default Enter