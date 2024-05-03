import React,{useState} from 'react'
import './product.css'
const Products = ({productItems}) => {
// const [count,setCount] = useState(0)
// const increment = () =>{
//   setCount(count + 1);
//   console.log(count)
// }
  return (
    <>
    <div className="products">
    <h3>Products</h3>   
  <div className="productContainer">
     
      
     {
      productItems.map((value,ind)=>(
<div className="product" key={ind}>

<div className="fa fa-heart icons" ></div>
<div className="fa fa-shopping-cart icons"></div>
      
        <div className="image">
        <picture>
          <img src={value.images} alt="" />
        </picture>
        </div>
        <div className="descriptions">
          <h5>{value.name}</h5>
          <p>{value.price}</p>
          <div className="star">
            <div className="fa fa-star"></div>
            <div className="fa fa-star"></div>
            <div className="fa fa-star"></div>
            <div className="fa fa-star"></div>
          </div>
          <button className='btn'>Buy Now</button>
        </div>
      </div>

      ))
     } 
    </div>   </div>
   
    </>
  )
}

export default Products;
