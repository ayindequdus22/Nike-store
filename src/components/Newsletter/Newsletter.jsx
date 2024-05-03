import React from 'react'
import './newsletter.css'
const Newsletter = () => {
  return (
    <>
    <div className="newsletter">
        <h3>Newsletter</h3>
    
        <p>It's obvious that Nike's the best sneaker producing company,no doubt.Subscribe to our website to get the latest updates on nike shoes.</p>
        <form action="">
            <input type="email" name="" id="" placeholder='Enter your email'/>
            <button type="submit" className='btn'>send email</button>
        </form>
    </div>
    </>
  )
}

export default Newsletter