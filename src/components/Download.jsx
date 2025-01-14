// import React from 'react'
import download1 from '../assets/download on playstore.png'
import download2 from '../assets/download-img.png'

const Download = () => {
  return (
    <div className="flex-container">
        <div className='left'> 
            <h1 className='download_title'>Download the app</h1>
            <p className='download_text'>Enjoy a seamless and intuitive experience designed for everyone</p>
            <img style={{marginTop: '20px'}} src={download1} alt="" />
        </div>

        <div className='right'>
            <img style={{width: '700px'}} src={download2} alt="" />  
        </div>
     
    </div>
  )
}

export default Download
