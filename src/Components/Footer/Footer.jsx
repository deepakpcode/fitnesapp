import React from 'react'
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {GrLinkedinOption} from 'react-icons/gr'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer">
      <div className="blur f-blur"></div>
        <hr />
<div className='socila-share'><BsInstagram/><GrLinkedinOption/><BsFacebook/></div>
    </div>
  )
}

export default Footer