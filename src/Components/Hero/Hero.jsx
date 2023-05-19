import React from 'react';
import './Hero.css'
import Header from '../Header/Header';
import hero_img from '../../assets/images/hero_image.png';
import hero_img_back from '../../assets/images/hero_image_back.png';
import calories from '../../assets/images/calories.png'
import heart from '../../assets/images/heart.png'
import { motion } from "framer-motion";
import NumberCounter from 'number-counter';

const Hero = () => {
  const transition = {type:"tween", duration:3}
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* Hero Swipe Bar */}
        <div className="swipe-bar">
        <motion.div
  initial={{ left: "245px" }}
  whileInView={{left:"8px"}}
  transition={{...transition, duration:4}}
/>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div><span className='outline-text'>shape </span><span>your</span></div>
          <div><span>ideal body</span></div>
          <div>In here we will help you to shape and build your ideal body and live up your life to fullest</div>
        </div>
        {/* Counters Figure */}
        <div className="figures">
          <div><span><NumberCounter start={100} end={140} delay={3} preFix='+'/></span><span>EXPERT COACHES</span></div>
          <div><span><NumberCounter start={800} end={978} delay={3} preFix='+'/></span><span>MEMBERS JOINED</span></div>
          <div><span><NumberCounter start={10} end={52} delay={3} preFix='+'/></span><span>FITNESS PROGRAMS</span></div>
        </div>
         {/* Hero buttons */}
         <div className="hero-buttons">
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
         </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>

        <motion.div 
        initial={{ right: '-1rem' }}
        whileInView={{right:'4.5rem'}}
        transition={{transition}}
        className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </motion.div>
      {/* Hero Main Image */}
      <img src={hero_img} alt="" className='hero-image' />
      <motion.img 
      initial={{  opacity:0, x:100 }}
      whileInView={{ opacity:1, x:0}}
      transition={{...transition, duration:3}}
      src={hero_img_back} alt="" className='hero-image-back'/>
      <div className="calories">
        <img src={calories} alt="" />
        <div>
        <span>Calories burned</span>
        <span>220 kcal</span>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Hero
