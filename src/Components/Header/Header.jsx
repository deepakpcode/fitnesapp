import React, {useState} from 'react'
import './Header.css';
import {GoThreeBars} from 'react-icons/go'
import {Link} from 'react-scroll'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <>
            <div className="header">
                <div className="logo">Fitness Club</div>
                <div className={openMenu ?'header active': 'header'}>
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link to='programs'
                    spy={true}
                    smooth={true}>Programs</Link></li>
                    <li><Link to='reasons'
                    spy={true}
                    smooth={true}>Why us</Link></li>
                    <li><Link to='plans'
                    spy={true}
                    smooth={true}>Plans</Link></li>
                    <li><Link
                    to='testimonials'
                    spy={true}
                    smooth={true}>Testimonials</Link></li>
                </ul>
                <div className="mobile-menu-btn"><GoThreeBars className='three-line' onClick={()=>setOpenMenu(!openMenu)}/></div>
                </div></div>
        </>
    )
}

export default Header