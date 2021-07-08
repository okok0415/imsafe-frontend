import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "./Button.js";
import DropdownNA from "./NewApplication/DropdownNA";
import DropdownH from "./Home/DropdownH";
import DropdownAL from "./ApplicationList/DropdownAL";
import DropdownS from "./Setting/DropdownS";
import "../../CSS/Navbar/Navbar2.css";
import ICON from "./home.png";

function Navbar2() {
    const [click, setClick] = useState(false)
    const [dropdownH, setDropdownH] = useState(false)
    const [dropdownNA, setDropdownNA] = useState(false)
    const [dropdownAL, setDropdownAL] = useState(false)
    const [dropdownS, setDropdownS] = useState(false)


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const onMouseEnterNA = () => {
        if (window.innerWidth < 960) {
            setDropdownNA(false);
        } else {
            setDropdownNA(true);
        }
    }

    const onMouseLeaveNA = () => {
        if (window.innerWidth < 960) {
            setDropdownNA(false);
        } else {
            setDropdownNA(false);
        }
    }

    const onMouseEnterH = () => {
        if (window.innerWidth < 960) {
            setDropdownH(false);
        } else {
            setDropdownH(true);
        }
    }

    const onMouseLeaveH = () => {
        if (window.innerWidth < 960) {
            setDropdownH(false);
        } else {
            setDropdownH(false);
        }
    }

    const onMouseEnterAL = () => {
        if (window.innerWidth < 960) {
            setDropdownAL(false);
        } else {
            setDropdownAL(true);
        }
    }

    const onMouseLeaveAL = () => {
        if (window.innerWidth < 960) {
            setDropdownAL(false);
        } else {
            setDropdownAL(false);
        }
    }

    const onMouseEnterS = () => {
        if (window.innerWidth < 960) {
            setDropdownS(false);
        } else {
            setDropdownS(true);
        }
    }

    const onMouseLeaveS = () => {
        if (window.innerWidth < 960) {
            setDropdownS(false);
        } else {
            setDropdownS(false);
        }
    }
    return (
        <>
            <nav className='navbar2'>
                <div className = 'navbar-logo' >
                    <img src = {ICON} alt="title" height='50' weight='50'/>
                </div>
                <Link to='/home' className="navbar-logo2">
                    
                    MOSCATO
                </Link>
                <div className='menu-icon2' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu2 active' : 'nav-menu2'}>
                    <li className='nav-item2' onMouseEnter={onMouseEnterH} onMouseLeave={onMouseLeaveH}>
                        <Link to='/home' className="nav-links2" onClick={closeMobileMenu}>
                            <i class="fas fa-home"></i>
                        </Link>
                        {dropdownH && <DropdownH />}

                    </li>
                    <li className='nav-item2' onMouseEnter={onMouseEnterNA} onMouseLeave={onMouseLeaveNA}>
                        <Link to='/create' className="nav-links2" onClick={closeMobileMenu}>
                        <i class="fas fa-plus-square"></i>
                        </Link>
                        {dropdownNA && <DropdownNA />}
                    </li>
                    <li className='nav-item2'  onMouseEnter={onMouseEnterAL} onMouseLeave={onMouseLeaveAL}>
                        <Link to='/execute' className="nav-links2" onClick={closeMobileMenu}>
                            <i class="fas fa-list"></i>
                        </Link>
                        {dropdownAL && <DropdownAL/>}
                    </li>
                    <li className='nav-item2'  onMouseEnter={onMouseEnterS} onMouseLeave={onMouseLeaveS}>
                        <Link to='/settings' className="nav-links2" onClick={closeMobileMenu}>
                            <i class="fas fa-cog"></i>
                        </Link>
                        {dropdownS && <DropdownS/>}
                    </li>
                        
                    <li className='nav-item2'>
                        <Link to='/Login' className='nav-links2-mobile' onClick={closeMobileMenu}>
                            <i class="fas fa-sign-in-alt"/>
                        </Link>
                    </li>
                </ul>
                <Button />

            </nav>
        </>
    )
}

export default Navbar2;