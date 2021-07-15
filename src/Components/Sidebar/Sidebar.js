import React from 'react';
import { Link } from "react-router-dom";
import "./CSS/Sidebar.css";
import { SidebarDataSettings, SidebarDataInquiry } from "./Data/SidebarData.js";

function SidebarSettings() {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <ul className="sidebar-list">
                    {SidebarDataSettings.map((val, key) => {
                        return (
                            <Link to={val.link}>
                                <li key={key} className="row" id={window.location.pathname === val.link ? "active" : ""}>
                                    <div id="icon">
                                        {val.icon}
                                    </div>
                                    <div id="title">
                                        {val.title}
                                    </div>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

function SidebarInquiry() {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <ul className="sidebar-list">
                    {SidebarDataInquiry.map((val, key) => {
                        return (
                            <Link to={val.link}>
                                <li key={key} className="row" id={window.location.pathname === val.link ? "active" : ""}>
                                    <div id="icon">
                                        {val.icon}
                                    </div>
                                    <div id="title">
                                        {val.title}
                                    </div>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export { SidebarSettings, SidebarInquiry };