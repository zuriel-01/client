// import React from 'react'
import image from '../assets/white-logo.png'
const Footer = () => {
  return (
    <div className="footer-bg">

        <div className="grid-section">
            <div className='footer1'>
                <img src={image} alt="" style={{width:'200px' }}/>
            </div>
            <div style={{marginTop: '30px'}} className='footer-body'>
                <p href="#">DOWNLOAD</p><br />
                <a href="#">Google Play Store</a><br /><br />
                <a href="#">IOS App Store</a>
            </div>
            <div style={{marginTop: '30px'}} className='footer-body'>
                <p href="#">GET HELP</p><br />
                <a href="#">Email</a><br /><br />
                <a href="#">Chat</a>
            </div>
            <div style={{marginTop: '30px'}} className='footer-body'>
                <p href="#">LEGAL</p><br />
                <a href="#">Privacy Policy</a><br /><br />
                <a href="#">Terms of Use</a>
            </div>
        </div>

    </div>
  )
}

export default Footer
