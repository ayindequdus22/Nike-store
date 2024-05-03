import {useState,useEffect} from 'react'
import {topsales,Tdata } from './data';
import Data from '../components/Products/Data'
import { Body,Down,Footer,Latest,Newsletter,Products,TopSales,Testimonial } from './Index';
function Container() {
  
const {productItems} = Data

  const [visible,setVisible]=useState(false);
useEffect(()=>{
window.addEventListener("scroll",()=>{
 if(window.scrollY > 100){
    setVisible(true)
  }
  else if(window.scrollY <= 100){
    setVisible(false)
  } 
}) 

},[])


  return (
<>

<Body/>
<Products productItems={productItems}/>
<TopSales topsales={topsales}/>
<Down/>
<Latest/>
<Testimonial Tdata={Tdata} />
<Newsletter/>
<Footer/>
<div className='relativeIcons'>

  <>
  <div className={visible ? "fa fa-chevron-up active" : ""} onClick={()=>{window.scrollTo({top:0,left:0,behavior:'smooth'})}}></div>
 <div className={visible ? "fa fa-chevron-down active": ""}onClick={()=>{window.scrollTo({top:document.documentElement.scrollHeight,behavior:'smooth'})}}></div>
  </>

</div>

</>
  );
}

export default Container;
 