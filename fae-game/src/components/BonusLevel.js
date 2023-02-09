// import { useState } from 'react'
import './BonusLevel.scss'
import { useState } from 'react'

function BonusLevel() {
  let [color1, setColor1] = useState('')
  let [color2, setColor2] = useState('')
  let [color3, setColor3] = useState('')
  let [color4, setColor4] = useState('')
  let [color5, setColor5] = useState('')
  let [color6, setColor6] = useState('')
  let [color7, setColor7] = useState('')
  let [color8, setColor8] = useState('')
  let [color9, setColor9] = useState('')
  let [color10, setColor10] = useState('')
  let [pixCount, setPixCount] = useState(0)
  let [win, setWin] = useState([])

  const countPix = () => {
    if (pixCount === 10) {
      setWin(<p>You did it, congratulations!</p>)
    }
  }

  const changeColor1 = (event) => {
    setColor1("purple")
    setPixCount(pixCount = pixCount + 1)
    countPix()
  }

  const changeColor2 = (event) => {
    setColor2("purple")
    setPixCount(pixCount = pixCount + 1)
    countPix()
  }

  const changeColor3 = (event) => {
    setColor3("purple")
    setPixCount(pixCount = pixCount + 1)
    countPix()
  }

  const changeColor4 = (event) => {
    setColor4("purple")
    setPixCount(pixCount = pixCount + 1)
    countPix()
  }

  const changeColor5 = (event) => {
    setColor5("purple")
    setPixCount(pixCount = pixCount + 1)
    countPix()
  }

  const changeColor6 = (event) => {
    setColor6("purple")
    setPixCount(pixCount = pixCount + 1)
    countPix()
  }

  const changeColor7 = (event) => {
    setColor7("purple")
    setPixCount(pixCount = pixCount + 1)
    countPix()
  }

  const changeColor8 = (event) => {
    setColor8("purple")
    setPixCount(pixCount = pixCount + 1)
    countPix()
  }

  const changeColor9 = (event) => {
    setColor9("purple")
    setPixCount(pixCount = pixCount + 1)
    countPix()
  }

  const changeColor10 = (event) => {
    setColor10("purple")
    setPixCount(pixCount = pixCount + 1)
    countPix()
  }

  return (
    <section>
      <p>Find the 10 lost gems, they'll change colour when you hover over them.</p>
      <p>Once you find them, click them. Find all 10 to earn a crystal.</p>
      <p>You have found {pixCount} extra gems</p>
      <p>{win}</p>
      <div id="pixels" >
        <div onClick={changeColor1} style={{ backgroundColor: color1 }} className='hidden-pixel1'></div>
        <div onClick={changeColor2} style={{ backgroundColor: color2 }} className='hidden-pixel2'></div>
        <div onClick={changeColor3} style={{ backgroundColor: color3 }} className='hidden-pixel3'></div>
        <div onClick={changeColor4} style={{ backgroundColor: color4 }} className='hidden-pixel4'></div>
        <div onClick={changeColor5} style={{ backgroundColor: color5 }} className='hidden-pixel5'></div>
        <div onClick={changeColor6} style={{ backgroundColor: color6 }} className='hidden-pixel6'></div>
        <div onClick={changeColor7} style={{ backgroundColor: color7 }} className='hidden-pixel7'></div>
        <div onClick={changeColor8} style={{ backgroundColor: color8 }} className='hidden-pixel8'></div>
        <div onClick={changeColor9} style={{ backgroundColor: color9 }} className='hidden-pixel9'></div>
        <div onClick={changeColor10} style={{ backgroundColor: color10 }} className='hidden-pixel10'></div>
      </div>
    </section >
  )
}


export default BonusLevel;