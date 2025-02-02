// import React from 'react'
import image from '../assets/white-logo.png'
const Footer = () => {
  return (
    <div style={{background:"black"}}>
    <div className="footer-bg">

        <div className="footer-section">
            <div className='footer1'>
                <img className='footerimage' src={image} alt=""/>
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
    <p className='copyw'>© Copyright 2024 all right reserved</p>

    </div>
  )
}

export default Footer
