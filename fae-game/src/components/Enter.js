import { Routes, Route, Link } from 'react-router-dom'
import Menu from './Menu'
import NoMatch from './NoMatch'
import One from './One'
import Two from './Two'
import Three from './Three'
import Finished from './Finished'
import './Enter.scss'
import faeNoWings from './images/fae_nowings.png'
import wings from './images/wings.png'
import faeNoWings2 from './images/fae-nowings2.png'
import wings2 from './images/wings2.png'
import './fae.scss'

function Enter() {

  return (
    <div>
      <div className='fae'>
        <div className='fae-nowings'>
          <img src={faeNoWings} alt="" />
          <div className='fae-wings'>
            <img src={wings} alt="" />
          </div>
        </div>
      </div>
      <div className='fae2'>
        <div className='fae-nowings2'>
          <img src={faeNoWings2} alt="" />
          <div className='fae-wings2'>
            <img src={wings2} alt="" />
          </div>
        </div>
      </div>
      <section hidden={false}>
        <h1>FAE GAME</h1>
        <Link to='/menu'>ENTER</Link>
      </section>
      <Routes>
        <Route path="*" element={<NoMatch />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/One' element={<One />} />
        <Route path='/Two' element={<Two />} />
        <Route path='/Three' element={<Three />} />
        <Route path='/Finished' element={<Finished />} />
      </Routes>
    </div>
  )
}
export default Enter;