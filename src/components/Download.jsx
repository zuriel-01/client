// import React from 'react'
import download1 from '../assets/Group 371.png'
import download2 from '../assets/download-img.png'
import phone_img from '../assets/Group 375.png'

const Download = () => {
  return (
    <div className="flex-container">
        <div className='left'> 
            <span className='download_title'>Download the app</span>
            <img className='phoneDown' src={phone_img} alt="" />
            {/* <div className='line'></div> */}
            <p className='download_text'>Enjoy a seamless and intuitive experience designed for everyone</p>
            <img className='dwnldimage' style={{marginTop: '20px'}} src={download1} alt="" />
        </div>

        <div className='right'>
            <img  className='dwnld' style={{width: '700px'}} src={download2} alt="" />  
        </div>
     
    </div>
  )
}

export default Download
