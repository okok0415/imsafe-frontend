import React from "react";
import { Switch, Route } from "react-router-dom";
import ChangePassword from "./Pages/ChangePassword.js";
import Myprofile from "./Pages/Myprofile.js";
import Navbar from "../Navbar/Navbar.js";
import { SidebarSettings } from "../Sidebar/Sidebar.js";
import "./CSS/Settings.css";

export const SettingsRouter = ({ match }) => {
    return (
        <>
            <Navbar />
            <div className="settings-grid">
                <div className="settings-sidebar">
                    <SidebarSettings />
                </div>
                <Switch>
                    <Route exact path={match.path + '/myprofile'} component={Myprofile} />
                    <Route exact path={match.path + '/changepassword'} component={ChangePassword} />
                </Switch>

            </div>
        </>
    )
}

