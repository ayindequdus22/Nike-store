import React from 'react'
import './latest.css'
import image from '../../image/red pack/red1.webp'
import image1 from '../../image/red pack/red2.webp'
import image2 from '../../image/red pack/red3.webp'
import image3 from '../../image/red pack/red5.webp'

const Latest = () => {
function change(){
    document.querySelector('.changedImg').setAttribute('src',image)
}
function change1(){
    document.querySelector('.changedImg').setAttribute('src',image1)
}
function change2(){
    document.querySelector('.changedImg').setAttribute('src',image2)
}
function change3(){
    document.querySelector('.changedImg').setAttribute('src',image3)
}
    return (
    <>
    <div className="latest">
        <h3>Latest Products</h3>
        <div className="latestproducts">
            <div className="latestImgContainer">
            <div className="latestImgHover">
            <img src={image} className="image" onClick={change} alt="" />
        </div>
        <div className="latestImgHover">
            <img src={image1}  className="image" onClick={change1}  alt="" />
        </div> 
        <div className="latestImgHover">
            <img src={image2} alt="" onClick={change2} />
        </div>
        <div className="latestImgHover">
            <img src={image3} alt="" onClick={change3}/>
        </div>
            </div>



            <div className="latestimg">
                <img src={image2} className="changedImg" alt="" />
            </div>
       <div className="latestDescription">
        <h4>Latest Nike Air Shoes</h4>
        <div className="stars">
            <div className="fa fa-star"></div>
            <div className="fa fa-star"></div>
            <div className="fa fa-star"></div>
            <div className="fa fa-star"></div>
            <div className="far fa-star"></div>
        </div>
        <p>Nike Air is an amazing shoe for outings,casual dressings and even for workouts.Kindly do make your purchase very soon.Thanks for your patronage.</p>
<h6>$50.00</h6>     
<button className="btn">Add to Cart</button>  
</div>
        </div>
           </div>
    </>
  )
}

export default Latest