import React from 'react'
import './Programs.css'
// import dumbell from '../../assets/images/dumbell.png'
// import runing from '../../assets/images/runing.png'
import { BiRightArrowAlt } from 'react-icons/bi';
import { BiDumbbell } from 'react-icons/bi';
import { BiRun } from 'react-icons/bi';
import { IoMdFlame } from 'react-icons/io';
import { BsHeartPulse } from 'react-icons/bs';


const Programs = () => {
    return (
        <div className="programs">
            {/* Heading Section */}
            <div className="p-header">
                <span className='outline-text'>Explore our</span>
                <span>Programs</span>
                <span className='outline-text'>To shape you</span>
            </div>
            {/* Programs Category */}
            <div className="p-categories">
                <div className="box1 items">
                    <span><BiDumbbell/></span> 
                    <span>Strength Training</span>
                    <span>In this program, you are trained to improve your strength through many exercises.</span>
                    <div className="join-now"><span>Join Now</span><span><BiRightArrowAlt/></span></div>
                </div>
                <div className="box2 items">
                <span><BiRun/></span> 
                    <span>Cardio Training</span>
                    <span>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</span>
                    <div className="join-now"><span>Join Now</span><span><BiRightArrowAlt/></span></div>
                </div>
                <div className="box3 items">
                <span><IoMdFlame/></span> 
                    <span>Fat Burning</span>
                    <span>This program is suitable for you who wants to get rid of your fat and lose their weight.</span>
                    <div className="join-now"><span>Join Now</span><span><BiRightArrowAlt/></span></div>
                </div>
                <div className="box4 items">
                <span><BsHeartPulse/></span> 
                    <span>Health Fitness</span>
                    <span>This programs is designed for those who exercises only for their body fitness not body building.</span>
                    <div className="join-now"><span>Join Now</span><span><BiRightArrowAlt/></span></div>
                </div>
            </div>
        </div>
    )
}

export default Programs