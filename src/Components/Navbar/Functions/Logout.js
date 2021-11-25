import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { logoutUser } from '../../../Redux/Actions/userAction';
import "../CSS/Navbar.css";

function Logout(props) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const onLogoutHandler = async (e) => {
        e.preventDefault();

        dispatch(await logoutUser())
        window.location.replace(props.url);
    };

    return (
        <li className={'nav-item'}>
            <Link to={props.url} className={'icon-button'} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onClick={onLogoutHandler}>
                {props.icon}
            </Link>

            {open && props.children}
        </li>
    )
}


export default Logout;