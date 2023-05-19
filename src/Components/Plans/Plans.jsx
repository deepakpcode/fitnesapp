import React from 'react'
import './Plans.css'
import dumbell from '../../assets/images/dumbell.png'
import { TbHeartPlus } from 'react-icons/tb'
import { FaCrown } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import { FiCheckCircle } from 'react-icons/fi'

const Plans = () => {
    return (
        <div className="plans">
            <div className="blur plan-blur1"></div>
            <div className="blur plan-blur2"></div>
            {/* Heading Section */}
            <div className="plan-header">
                <span className='outline-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='outline-text'>NOW WITHUS</span>
            </div>
            {/* Plans Card */}
            <div className="p-card">


                <div className='card'>
                    <span className='heart'><TbHeartPlus /></span>
                    <span>BASIC PLAN</span>
                    <span>$ 25</span>
                    <div className='feature'>
                        <div>
                            <span><FiCheckCircle />
                            </span><span>2 hours of excercises</span>
                        </div>
                        <div>
                            <span><FiCheckCircle /></span>
                            <span>Free consultaion to coaches</span>
                        </div>
                        <div>
                            <span><FiCheckCircle /></span>
                            <span>Access to The Community</span>
                        </div>
                    </div>
                    <div className='more'><span>See more benefits</span><span><BsArrowRightShort /></span></div>
                    <div className="joinbtn">Join now</div>
                </div>



                <div className='card card2'>
                    <span><FaCrown /></span>
                    <span>PREMIUM PLAN</span>
                    <span>$ 30</span>
                    <div className='feature'>
                        <div>
                            <span><FiCheckCircle /> </span>
                            <span>5 hours of excercises</span>
                        </div>
                        <div>
                            <span><FiCheckCircle /></span>
                            <span>Free consultaion to Coaches</span>
                        </div>
                        <div>
                            <span><FiCheckCircle /></span>
                            <span>Access to minibar</span>
                        </div>
                    </div>
                    <div className='more'><span>See more benefits</span><span><BsArrowRightShort /></span></div>
                    <div className="joinbtn">Join now</div>
                </div>




                <div className='card'>
                    <span><img src={dumbell} alt="" /></span>
                    <span>PRO PLAN</span>
                    <span>$ 45</span>
                    <div className='feature'>
                        <div>
                            <span><FiCheckCircle />
                            </span><span>8 hours of excercises</span>
                        </div>
                        <div>
                            <span><FiCheckCircle /></span>
                            <span>Consultation of Private Coach</span>
                        </div>
                        <div>
                            <span><FiCheckCircle /></span>
                            <span>Free Fitness Merchandises</span>
                        </div>
                    </div>
                    <div className='more'><span>See more benefits</span><span><BsArrowRightShort /></span></div>
                    <div className="joinbtn">Join now</div>
                </div>
            </div>
        </div>
    )
}

export default Plans