import React from 'react';
import { Link } from "react-router-dom";
import Title from "../icons/imsafe.png";
import "../CSS/Navbar.css";
function Topbar(props) {
    return (
        <nav className="navbar">
            <Link to='/home' className="navbar-title"><img src={Title} height="40px" alt="" /></Link>
            <ul className="navbar-nav">
                {props.children}
            </ul>
        </nav>
    );
}

export default Topbar;