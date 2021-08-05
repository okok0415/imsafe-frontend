import React from "react";
import { ReactComponent as ListIcon } from "./icons/list.svg";
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as LogoutIcon } from './icons/logout.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import Topbar from "./Functions/Topbar.js";
import NavItem from "./Functions/NavItem.js";
import { DropdownMenuC, DropdownMenuI, DropdownMenuS } from "./Functions/DropdownMenu.js";
import "./CSS/Navbar.css";

function Navbar() {
    return (
        <Topbar>
            <NavItem icon={<PlusIcon />} url="/create">
                <DropdownMenuC />
            </NavItem>
            <NavItem icon={<ListIcon />} url="/inquiry/state">
                <DropdownMenuI />
            </NavItem>
            <NavItem icon={<CogIcon />} url="/settings/myprofile">
                <DropdownMenuS />
            </NavItem>
            <NavItem icon={<LogoutIcon />} >
            </NavItem>
        </Topbar>
    );
}



export default Navbar;