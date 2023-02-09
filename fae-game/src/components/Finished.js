import './Crystals.scss'
import './Finished.scss'
import crystal1 from './images/crystal1white.png'
import crystal2 from './images/crystal2white.png'
import crystal3 from './images/crystal3white.png'
import crystal4 from './images/crystal4white.png'
import crystal5 from './images/crystal5white.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'



function Finished() {
  let [crystalThrow, setcrystalThrow] = useState([])


  function Throw1(event) {
    return (
      setcrystalThrow(
        <div className="throw1">
          <div className='img1'>
            <img src={crystal1} alt="" />
          </div>
          <div className='img2'>
            <img src={crystal1} alt="" />
          </div>
          <div className='img3'>
            <img src={crystal1} alt="" />
          </div>
        </div>
      )
    )
  }

  function Throw2(event) {
    return (
      setcrystalThrow(
        <div className="throw2">
          <div className='img4'>
            <img src={crystal2} alt="" />
          </div>
          <div className='img5'>
            <img src={crystal2} alt="" />
          </div>
          <div className='img6'>
            <img src={crystal2} alt="" />
          </div>
        </div>
      )
    )
  }

  function Throw3(event) {
    return (
      setcrystalThrow(
        <div className="throw3">
          <div className='img7'>
            <img src={crystal3} alt="" />
          </div>
        </div>
      )
    )
  }

  function Throw4(event) {
    return (
      setcrystalThrow(
        <div className="throw4">
          <div className='img8'>
            <img src={crystal4} alt="" />
          </div>
          <div className='img9'>
            <img src={crystal4} alt="" />
          </div>
          <div className='img10'>
            <img src={crystal4} alt="" />
          </div>
        </div>
      )
    )
  }

  function Throw5(event) {
    return (
      setcrystalThrow(
        <div className="throw8">
          <div className='img11'>
            <img src={crystal5} alt="" />
          </div>
          <div className='img12'>
            <img src={crystal5} alt="" />
          </div>
          <div className='img13'>
            <img src={crystal5} alt="" />
          </div>
        </div>
      )
    )
  }





  return (
    <div>
      <div className='throw'>{crystalThrow}</div>
      <h1>The end</h1>
      <div className='crystal-display'>
        <div onClick={Throw1} className="crystal1" >
          <img src={crystal1} alt="" />
        </div>
        <div onClick={Throw2} className="crystal2" >
          <img src={crystal2} alt="" />
        </div>
        <div onClick={Throw3} className="crystal3" >
          <img src={crystal3} alt="" />
        </div>
        <div onClick={Throw4} className="crystal4" >
          <img src={crystal4} alt="" />
        </div>
        <div onClick={Throw5} className="crystal5" >
          <img src={crystal5} alt="" />
        </div>
      </div>
      <section className='bonus'>
        <Link className="link" to='/BonusLevel'>Bonus</Link>
      </section>
    </div>
  )
}
export default Finished;
