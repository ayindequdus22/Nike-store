import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
    <div className="headerContainer">
<div className="category">
    <div className='divCate'>
        <div className="fa fa-border-all"></div><span style={{padding:'0 1.5rem'}}>Categories</span> <div className="fa fa-chevron-down"></div></div>
</div>
<form action="">
    <input type="search" name="" placeholder='search for any shoe' id="" />
    <div className="fa fa-search"></div>
    <button className="btn">Search</button>
</form>
    </div>
    </>
  )
}

export default Header