import React from 'react'
import "./Testimonial.css"
const Testimonial = ({Tdata:{testimonialData}}) => {

  return (
    <>
    <div className="testimonials">
      <h3>Testimonial</h3>
      <div className="testimonialContainer">
       {testimonialData.map((value,index)=>(
           <div className="testimonial" key={index}>
            <div className="image">
                <img src={value.img} alt="nike shoe" className='img1' />
                <img src={value.img2} className="img2 " alt="" />
            </div>
        <div className="details">
            <p>{value.caption}</p>
            <a href="#">{value.title}</a>
            <p>{value.creator}</p>
        </div>
        </div>
      
      ))
    }           
      
      </div>
    
    </div>
    </>
  )
}

export default Testimonial