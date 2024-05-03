import React from 'react'
import './Body.css'
import Image from './../../image/hero.png'
const Body = () => {
  return (
    <> 
<div className="heroContainer">
 <div className="content">
    <p>Shoes Fashion</p>
    <h4>Come and Get it</h4>
<h1>Brand new shoes</h1>
<button className='btn'>Shop Now</button>
  </div>  
  <div className="imageContainer">
<div className="image">
   <img src={Image} alt="" />
</div>
   
  </div>
 
</div>
    </>
  
  )
}

export default Body