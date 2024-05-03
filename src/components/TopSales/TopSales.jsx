import React from 'react'
import './TopSales.css'
const TopSales = ({topsales:{title,topsalesItems}}) => {
  return (
    <>
    <div className="topsales">
    <h3>{title}</h3>   
  <div className="topsalesContainer">
     
      
     {
     topsalesItems.map((value,ind)=>(
<div className="topsalesItems"key={ind}>


        <div className="image">
        <picture>
          <img src={value.images} alt="" />
        </picture>
        </div>
        <div className="descriptions">
          <h5>{value.name}</h5>
       <div>
Rock Nike On Your Favorite Designer Clothes.
       </div>
          <button className='btn' style={{ height: '3.5rem',fontSize: '1.9rem',width: '15rem'}}>Add to Cart</button>
        </div>
      </div>

      ))
     } 
    </div>
    
       </div>
  
    </>
  )
}

export default TopSales