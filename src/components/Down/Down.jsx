import React from 'react'
import './Down.css'
import shoe from '../../image/shoes7.png'
import shoe1 from '../../image/shoes6.png'

const Down = () => {
function remove(){
document.querySelector('.downContainer1').classList.remove('active');
document.querySelector('.downContainer2').classList.add('active');
}
function show(){
  document.querySelector('.downContainer2').classList.remove('active');
  document.querySelector('.downContainer1').classList.add('active');
  }
  return (
    <>
    <div className="downContainer downContainer1 active">
<div className="down">
<div className="fa fa-times" onClick={remove}></div>
    <div className="img">
      <img src={shoe} alt="" />
    </div>  
      <div className="details">
      <p>Goke just purchased nike</p>
   <h6>Purple Air</h6>
   <p>5 minutes ago</p>
    </div>

</div>
    </div>
    <div className="downContainer downContainer2">
<div className="down">
<div className="fa fa-times" onClick={show}></div>
    <div className="img">
      <img src={shoe1} alt="" />
    </div>  
      <div className="details">
      <p>Goke just purchased nike</p>
   <h6>Purple Air</h6>
   <p>5 minutes ago</p>
    </div>

</div>
    </div>
    </>
  )
}

export default Down