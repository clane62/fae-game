import './Crystals.scss'
import './Finished.scss'
import crystal1 from './images/crystal1white.png'
import crystal2 from './images/crystal2white.png'
import crystal3 from './images/crystal3white.png'
import crystal4 from './images/crystal4white.png'
import crystal5 from './images/crystal5white.png'
import { useState } from 'react'


function Finished() {
  let [crystalThrow, setcrystalThrow] = useState([])


  function Throw1(event) {
    return (
      setcrystalThrow(
        <div className="throw1">
          <div className='loc1'>
            <img src={crystal1} alt="" />
          </div>
          <div className='loc2'>
            <img src={crystal1} alt="" />
          </div>
          <div className='loc3'>
            <img src={crystal1} alt="" />
          </div>
        </div>
      )
    )
  }

  function Throw3(event) {
    return (
      setcrystalThrow(
        <div className="throw2">
          <div className='loc7'>
            <img src={crystal3} alt="" />
          </div>
        </div>
      )
    )
  }

  function Throw4(event) {
    return (
      setcrystalThrow(
        <div className="throw1">
          <div className='loc4'>
            <img src={crystal4} alt="" />
          </div>
          <div className='loc5'>
            <img src={crystal4} alt="" />
          </div>
          <div className='loc6'>
            <img src={crystal4} alt="" />
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
        <div className="crystal2" >
          <img src={crystal2} alt="" />
        </div>
        <div onClick={Throw3} className="crystal3" >
          <img src={crystal3} alt="" />
        </div>
        <div onClick={Throw4} className="crystal4" >
          <img src={crystal4} alt="" />
        </div>
        <div className="crystal5" >
          <img src={crystal5} alt="" />
        </div>
      </div>
    </div>
  )
}
export default Finished;
