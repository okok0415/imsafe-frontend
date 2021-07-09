import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "./Button.js";
import DropdownC from "./Create/DropdownC";
import DropdownI from "./Inquiry/DropdownI";
import DropdownS from "./Setting/DropdownS";
import "../../CSS/Navbar/Navbar2.css";

function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdownC, setDropdownC] = useState(false)
    const [dropdownI, setDropdownI] = useState(false)
    const [dropdownS, setDropdownS] = useState(false)


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const onMouseEnterC = () => {
        if (window.innerWidth < 960) {
            setDropdownC(false);
        } else {
            setDropdownC(true);
        }
    }

    const onMouseLeaveC = () => {
        if (window.innerWidth < 960) {
            setDropdownC(false);
        } else {
            setDropdownC(false);
        }
    }


    const onMouseEnterI = () => {
        if (window.innerWidth < 960) {
            setDropdownI(false);
        } else {
            setDropdownI(true);
        }
    }

    const onMouseLeaveI = () => {
        if (window.innerWidth < 960) {
            setDropdownI(false);
        } else {
            setDropdownI(false);
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
                <Link to='/home' className="navbar-logo2">
                    IMSAFE
                </Link>
                <div className='menu-icon2' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu2 active' : 'nav-menu2'}>
                    <li className='nav-item2' onMouseEnter={onMouseEnterC} onMouseLeave={onMouseLeaveC}>
                        <Link to='/create' className="nav-links2" onClick={closeMobileMenu}>
                            <i class="fas fa-plus-square"></i>
                        </Link>
                        {dropdownC && <DropdownC />}
                    </li>
                    <li className='nav-item2' onMouseEnter={onMouseEnterI} onMouseLeave={onMouseLeaveI}>
                        <Link to='/execute' className="nav-links2" onClick={closeMobileMenu}>
                            <i class="fas fa-list"></i>
                        </Link>
                        {dropdownI && <DropdownI />}
                    </li>
                    <li className='nav-item2' onMouseEnter={onMouseEnterS} onMouseLeave={onMouseLeaveS}>
                        <Link to='/settings' className="nav-links2" onClick={closeMobileMenu}>
                            <i class="fas fa-cog"></i>
                        </Link>
                        {dropdownS && <DropdownS />}
                    </li>

                    <li className='nav-item2'>
                        <Link to='/Login' className='nav-links2-mobile' onClick={closeMobileMenu}>
                            <i class="fas fa-sign-in-alt" />
                        </Link>
                    </li>
                </ul>
                <Button />

            </nav>
        </>
    )
}

export default Navbar;