import React from 'react'
import './Email.css';


const Email = () => {
  return (
    <div className="emails">
        <div className="e-left">
          <div></div>
<div><span className='outline-text'>READY TO</span><span>LEVEL UP</span></div>
<div><span>YOUR BODY</span><span className='outline-text'>WITH US?</span></div>
        </div>
        <div className="e-right">
<form action="" className='e-container'>
    <input type="email" name='user_email' placeholder='Enter your Email Address here...'/>
    <button className='btn btn-e'>Join now</button>
</form>
        </div>
    </div>
  )
}

export default Email