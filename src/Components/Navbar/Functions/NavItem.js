import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <Link to={props.url} className="icon-button"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                {props.icon}
            </Link>

            {open && props.children}
        </li>
    );
}

export default NavItem;