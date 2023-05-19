import React from 'react'
import './Reasons.css'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'
import nb from '../../assets/images/nb.png'
import nike from '../../assets/images/nike.png'
import adidas from '../../assets/images/adidas.png'
import tick from '../../assets/images/tick.png'

const Reasons = () => {
  return (<>
    <div className="reasons">
        <div className="r-images">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="r-content">
            <span>Some Reasons</span>
            <div>
                <span className='outline-text'>Why </span>
                <span>Choose Us?</span>
            </div>
            <div className="r-details">
            <div>
                <img src={tick} alt=''/>
                <span>OVER 140+ EXPERT COACHS</span>
            </div>
            <div>
            <img src={tick} alt=''/>
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div>
            <img src={tick} alt=''/>
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div>
            <img src={tick} alt=''/>
            <span>RELIABLE PARTNERS</span>
            </div>
        </div>
        <span style={{color : 'gray'}}>OUR PARTNERS</span>
        <div className='partners'>
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Reasons