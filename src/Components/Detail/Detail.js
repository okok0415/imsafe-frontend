import React from "react";
import Navbar from "../Navbar/Navbar";
import { SidebarInquiry } from "../Sidebar/Sidebar";
import "./CSS/Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        console.log(this.props);

        const { location, history } = this.props;
        if (location.state)
            if (location.state === undefined) {
                history.push("/home");
            }

    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <>
                    <Navbar />
                    <div className="inquiry-grid">
                        <SidebarInquiry />
                        <div className="detail">
                            <div className="detail-top">
                                <div className="detail-left">
                                    {location.state.name}님 세부정보
                                </div>
                                <div className="detail-right">
                                    <div className="alarm-status">
                                        알람 상태
                                    </div>
                                    <div className="alarm-log">
                                        알람 로그
                                    </div>
                                    <div className="sensor-inf">
                                        센서정보
                                    </div>
                                </div>
                            </div>
                            <div className="detail-bottom">
                                {location.state.name}님 생활 패턴 주간 보고서
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return null;
        }

    }
}

export { Detail };