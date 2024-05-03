import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <footer>
     <div className="ourStore">
<h6>Products</h6>
<a href="#">Nike Air</a>
<a href="#">Nike Air Max</a>
<a href="#">Nike Air Force</a>
<a href="#">Nike Jordan</a>
    </div> 
      <div className="contactUs">
<h6>Services</h6>
<a href="#">Prices Drop</a>
<a href="#"> New Products</a>
<a href="#">Best Sales</a>
<a href="#">Contact Us</a> 
<a href="#">Location</a>

    </div>
    <div className="getHelp">
<h6>Get Help</h6>
<a href="#">FAQ</a>
<a href="#">Shipping</a> 
<a href="#">Returns</a> 
<a href="#">Payment Options</a> 

    </div>
 
       <div className="followUs">
<h6>Contact</h6>
<a href="#" className="fab fa-facebook"></a>
<a href="#" className="fab fa-instagram"></a>
<a href="#" className="fab fa-twitter"></a>
    <a href="#" className="fab fa-whatsapp"></a>
    </div>
        </footer></>
  )
}

export default Footer