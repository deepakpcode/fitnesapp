import React from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../Data/testimonialsData';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useState } from 'react';
import { motion } from "framer-motion";

const Testimonials = () => {
  const transition = {type:"tween", duration:3}
  const [datacount, setDatacount] = useState(0);
  const tlength = testimonialsData.length;
  return (<>
  <div className="testimonials">
    <div className="t-left">
<span>TESTIMONIALS</span>
<span className='outline-text'>WHAT THEY</span>
<span>SAY ABOUT US</span>
<motion.span
key={datacount}
initial={{ opacity:0, x:-100 }}
animate={{opacity:1, x:0}}
exit={{opacity:0, x:100}}
transition={{...transition, duration:2}}>
  {testimonialsData[datacount].review}
</motion.span>
<span style={{color:"orange"}}>
  {testimonialsData[datacount].name} <span style={{color:"white"}}> - {testimonialsData[datacount].status} </span>
</span>

    </div>
    <div className="t-right">
      <motion.div
      initial={{ opacity:0, x:-100 }}
      whileInView={{opacity:1, x:0}}
      transition={{...transition, duration:2}}></motion.div>

      <motion.div
      initial={{ opacity:0, x:100 }}
      whileInView={{opacity:1, x:0}}
      transition={{...transition, duration:2}}></motion.div>

<motion.img 
key={datacount}
 initial={{ opacity:0, x:100 }}
 animate={{opacity:1, x:0}}
 exit={{opacity:0, x:-100}}
 transition={{...transition, duration:3}}

src={testimonialsData[datacount].image} alt="" />
<div className="arrows">
<span onClick={()=>{
datacount===0?setDatacount(tlength-1):setDatacount((prev)=>prev-1)
}}><AiOutlineArrowLeft/></span>
<span onClick={()=>{
datacount===tlength-1?setDatacount(0):setDatacount((prev)=>prev+1)
}}><AiOutlineArrowRight/></span>
</div>
    </div>
  </div>
  </>)
}

export default Testimonials