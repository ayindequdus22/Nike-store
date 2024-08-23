import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
const Top = ({count}) => {
  const [navState, setNavState] = useState(false);

  const onNavScroll = ({count}) => {
    if(window.scrollY > 70) {
        setNavState(true);
    } else {
        setNavState(false);
    }
}
useEffect(() => {
    window.addEventListener('scroll', onNavScroll);

    return () => {
        window.removeEventListener('scroll', onNavScroll);
    }
},[]);




    const show = () =>{
        document.querySelector('.navlinks .links').classList.add('active');
      }
      const Remove = () =>{
        document.querySelector('.navlinks .links').classList.remove('active');
      }
  return (
    <>
  <div  className={!navState ? 'navlinks':'navlinks active'} id="navbar">
 
 <div className="fa fa-bars" onClick={show}></div>
 <Link to='/'>
<p style={{fontSize:'2rem'}}>Nike Store</p></Link>
 <div className="links">
    <Link to='/'>
    Home
    </Link>
     <a href="#">Shop</a>
     <a  href="#">Women</a>
     <a  href="#">Man</a>
     <a  href="#" className='not'>Sports</a>
    <div className="fa fa-times" onClick={Remove}></div></div>
 <div className="icons">
     <Link to="">
      <div className="fa fa-heart">
         <div className="times"> 3</div>
     </div> 
     </Link>
    <Link to="/cart">
<div className="fa fa-shopping-cart">
<div className="times">0</div>
</div>
</Link>
<div className="total">
 <p>Total</p>
 <p>$0.00</p>
</div>
 </div>
</div>
    </> 

  )
}

export default Top
