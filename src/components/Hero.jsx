// import React from 'react'
import house1 from '../assets/hero-1.png'
import house2 from '../assets/hero-2.png'
import house3 from '../assets/hero-3.png'

const Hero = () => {
  return (
    <div>
        <div>
            <span className='head center' ><p>Explore Homes</p> <p style={{ color: 'black'}}>at</p> </span>
            <span className='head center' style={{ padding: '0px', color: 'black' }}>Your Fingertips</span>
        </div>
        <h1 className='head center' style={{ padding: '10px', fontSize:'30px', color:'black' }}>Download the Mobile App Now </h1>

        <div className='house center'>
        <img src={house1} alt="" className='home1 '/>
        <img src={house2} alt="" className='home1 '/>
        <img src={house3} alt="" className='home1 '/>
        </div>
        <div>
            <span className='paragraph1 center'>Finding your dream home has never been easier. Tap</span>
            <span className='paragraph1 center'>below to download the app and start your journey today!</span>
            <span className='center'> <button className='button2'>Get Started</button></span>
        </div>
    </div>
  )
}

export default Hero
