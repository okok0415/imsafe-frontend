import React from "react";
import State from "./Pages/State.js";
import Sensor from "./Pages/Sensor.js";
import Alarm from "./Pages/Alarm.js";
import Navbar from "../Navbar/Navbar.js";
import { SidebarInquiry } from "../Sidebar/Sidebar.js";
import "../../CSS/App.css";
import { Route, Switch } from "react-router-dom";

export const InquiryRouter = ({ match }) => {

    return (
        <>

            <Navbar />
            <div className="inquiry-grid">
                <SidebarInquiry />
                <Switch>
                    <Route exact path={match.path + '/state'} component={State} />
                    <Route exact path={match.path + '/sensor'} component={Sensor} />
                    <Route exact path={match.path + '/alarm'} component={Alarm} />
                </Switch>
            </div>
        </>
    )
}
