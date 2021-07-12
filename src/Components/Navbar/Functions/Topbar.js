import React from 'react';
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
function Topbar(props) {
    return (
        <nav className="navbar">
            <Link to='/home' className="navbar-title">IMSAFE</Link>
            <ul className="navbar-nav">
                {props.children}
            </ul>
        </nav>
    );
}

export default Topbar;