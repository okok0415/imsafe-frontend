import React from "react";
import Settings from "./Settings.js";
import Navbar from "../Navbar/Navbar.js";
import { SidebarSettings } from "../Sidebar/Sidebar.js";

function SettingsRouter() {

    return (
        <>
            <Navbar />
            <SidebarSettings />
            <Settings />
        </>
    )
}

export { SettingsRouter };