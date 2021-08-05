import React from "react";
import { Link } from "react-router-dom";
import DashBoardAlarm from "./TopTable/DashBoardAlarm.js";
import DashBoardLeftSensor from "./BottomLeftTable/DashBoardSensor.js";
import DashBoardRightSensor from "./BottomRightTable/DashBoardSensor.js";
import Navbar from "../Navbar/Navbar.js";
import "./CSS/Home.css";
function HomeRouter() {

    return (
        <>
            <Navbar />
            <div className="dashboard">
                <div className="top-block">
                    <h2>최근 온 알람</h2>
                    <DashBoardAlarm />
                    <div className='more'>
                        <Link to="/inquiry/alarm">
                            더보기...
                        </Link>
                    </div>
                </div>
                <div className="bottom-block">
                    <h2>센서 이상 유무</h2>
                    <div className="block-table">
                        <div className="left">
                            <DashBoardLeftSensor />
                        </div>
                        <div className="right">
                            <DashBoardRightSensor />
                        </div>
                    </div>
                    <div className='more'>
                        <Link to="/inquiry/sensor">
                            더보기...
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export { HomeRouter };