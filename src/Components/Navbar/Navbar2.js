import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "./Button.js";
import Dropdown from "./Dropdown";
import "../../CSS/Navbar/Navbar2.css";

function Navbar2() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }

    return (
        <>
            <nav className='navbar2'>
                <Link to='/' className="navbar-logo2">
                    CD <i className="fas fa-book-reader" width="50%" />
                </Link>
                <div className='menu-icon2' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu2 active' : 'nav-menu2'}>
                    <li className='nav-item2'>
                        <Link to='/' className="nav-links2" onClick={closeMobileMenu}>
                            home
                        </Link>
                    </li>
                    <li className='nav-item2' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/Board' className="nav-links2" onClick={closeMobileMenu}>
                            Boards <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item2'>
                        <Link to='/ScreenSharing' className="nav-links2" onClick={closeMobileMenu}>
                            ScreenSharing
                        </Link>
                    </li>
                    <li className='nav-item2'>
                        <Link to='/Login' className='nav-links2-mobile' onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                </ul>
                <Button />

            </nav>
        </>
    )
}

export default Navbar2;