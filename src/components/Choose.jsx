// import React from 'react'
import whychoose1 from '../assets/why-choose-1.png'
import whychoose2 from '../assets/why-choose-2.png'
import whychoose3 from '../assets/why-choose-3.png'
import line from '../assets/Line 14.svg'

const Choose = () => {
    const info = [{id:1,img:whychoose1, title:"Smart Search", description:"Find exactly what you need with advanced filters for location, budget, property type and more.", alignment:"left"},
        {id:2, title:"Instant Notification", img:whychoose2,description:"Never miss a new listing with real-time alerts for properties that match your preferences..", alignment:"center"},
        {id:3, title:"Direct Communication", img:whychoose3,description:"Never miss a new listing with real-time alerts for properties that match your preferences.", alignment:"right"},
    ]
  return (
    <div className="c1-bg">
        <h1 className="choose1 center ">Why Choose Our App?</h1>
        <div className="paragraph2 center" style={{}}>
            <p style={{ }} >We make house hunting simple, convenient,
             and stress free</p>  
        </div>
        <div className='choosee center'>
            {info.map((index)=>(
                 <div className='choosee1' key={index.id}>
                 
                 <img src={index.img} alt="" />
                 <div>
                 <img src={line} alt=""  className='line'/>
             
                 <h1 className='choosee_title '>{index.title}</h1>
                 <p className='choosee_body'>{index.description}</p>

                 </div>
             </div>
            ))}
           
        </div>
    </div>
  )
}

export default Choose
