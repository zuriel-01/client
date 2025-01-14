// import React from 'react'
import whychoose1 from '../assets/why-choose-1.png'
import whychoose2 from '../assets/why-choose-2.png'
import whychoose3 from '../assets/why-choose-3.png'

const Choose = () => {
  return (
    <div className="c1-bg">
        <h1 className="choose1 center ">Why Choose Our App?</h1>
        <div className="paragraph2 center">
            <span>We make house hunting simple, convenient</span>
            <span> and stress free</span>  
        </div>
        <div className='choosee center'>
            <div className='choosee1'>
                <img src={whychoose1} alt="" />
                <p className='choosee_title center'>Smart Search</p>
                <p className='choosee_body'>Find exactly what you need with advanced filters for location, budget, property type and more.</p>
            </div>

            <div className='choosee1'>
                <img src={whychoose2} alt="" />
                <p className='choosee_title center'>Instant Notification</p>
                <p className='choosee_body'>Never miss a new listing with new time alerts for properties that match your preferences.</p>
            </div>

            <div className='choosee1'>
                <img src={whychoose3} alt="" />
                <p className='choosee_title center' style={{marginTop: '13px'}}>Direct Communication</p>
                <p className='choosee_body'>Never miss a new listing with new time alerts for properties that match your preferences.</p>
            </div>
        </div>
    </div>
  )
}

export default Choose
