import React from "react";
import Navbar from "../Navbar/Navbar";
import { SidebarInquiry } from "../Sidebar/Sidebar";
import "./CSS/Detail.css";
import { WeeklyReport } from "./WeeklyReport";

class Detail extends React.Component {
    state = {
        userInf: {

        },
        alarmState: true,
        alarmLog: [
            "2021-07-06 센서 1 낙상(Fallen) 발생",
            "2021-06-18 센서 1 발열증세 발생",
            "2021-03-01 센서 1 낙상(Fallen) 발생"
        ],
        sensorInf: {
            sensorName: "센서1",
            batteryStatus: "89%",
            batteryChangeDate: "2020-08-18 16:47",
            batteryChangeCount: "2",
            powerStatus: true,
            networkStatus: true
        },

    }

    componentDidMount() {
        const { location } = this.props;
        const name = location.state.name;
        fetch(`http://127.0.0.1:8000/elder/json/${name}`)
            .then(res => res.json())
            .then(res => this.setState({ userInf: res }));

    }
    render() {
        const { location } = this.props;
        const userdetail = this.state.userInf;
        const printLog = this.state.alarmLog.map((log) => <div className="alarm-content">{log}</div>);
        if (location.state) {
            return (
                <>
                    <Navbar />
                    <div className="inquiry-grid">
                        <SidebarInquiry />
                        <div className="detail">
                            <div className="detail-top">
                                <div className="detail-left">
                                    <div className="text">
                                        <div className="title">
                                            <div className="title-title">
                                                {userdetail.name}님 세부정보
                                            </div>
                                            <button className="btn"> 수정하기</button>
                                        </div>
                                        <div className="detail-content">
                                            <div className="subtitle" >본인 정보</div>
                                            <div className="substance">
                                                <div className="left">
                                                    나이 :
                                                </div>
                                                <div className="right">
                                                    {userdetail.age}
                                                </div>
                                            </div>
                                            <div className="substance">
                                                <div className="left">
                                                    성별 :
                                                </div>
                                                <div className="right">
                                                    {userdetail.gender}
                                                </div>
                                            </div>
                                            <div className="substance">
                                                <div className="left">
                                                    주소 :
                                                </div>
                                                <div className="right">
                                                    {userdetail.address}
                                                </div>
                                            </div>
                                            <div className="substance">
                                                <div className="left">
                                                    전화번호 :
                                                </div>
                                                <div className="right">
                                                    {userdetail.phonenumber}
                                                </div>
                                            </div>
                                            <div className="substance">
                                                <div className="left">
                                                    진료기록 :
                                                </div>
                                                <div className="right">
                                                    {location.state.medicalRecord}
                                                </div>
                                            </div>
                                            <div className="subtitle" >보호자 정보</div>
                                            <div className="substance">
                                                <div className="left">
                                                    성함 :
                                                </div>
                                                <div className="right">
                                                    {location.state.protector}
                                                </div>
                                            </div>
                                            <div className="substance">
                                                <div className="left">
                                                    전화번호 :
                                                </div>
                                                <div className="right">
                                                    {location.state.protectorNum}
                                                </div>
                                            </div>
                                            <div className="subtitle" >병원 정보</div>
                                            <div className="substance">
                                                <div className="left">
                                                    담당자 :
                                                </div>
                                                <div className="right">
                                                    {location.state.PIC}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-right">
                                    <div className="alarm-status">
                                        <span>알람 상태 : </span>
                                        <span>
                                            {this.state.alarmState ? <i className="fas fa-check-circle"></i> : <i className="fas fa-times"></i>}
                                        </span>
                                    </div>
                                    <div className="alarm-log">
                                        <div className="title">알람 로그</div>
                                        <div className="log">
                                            {printLog}
                                        </div>
                                        <div className="more">더보기...</div>
                                    </div>
                                    <div className="sensor-inf">
                                        <div className="title">센서 정보</div>
                                        <div className="subtitle">기기 정보</div>
                                        <div className="substance">
                                            <span className="left">센서명 :</span>
                                            <span className="right">{this.state.sensorInf.sensorName}</span>
                                        </div>
                                        <div className="subtitle">건전지 정보</div>
                                        <div className="substance">
                                            <span className="left">상태 :</span>
                                            <span className="right">{this.state.sensorInf.batteryStatus}</span>
                                        </div>
                                        <div className="substance">
                                            <span className="left">교체 시점 :</span>
                                            <span className="right">{this.state.sensorInf.batteryChangeDate}</span>
                                        </div>
                                        <div className="substance">
                                            <span className="left">교체 횟수 :</span>
                                            <span className="right">{this.state.sensorInf.batteryChangeCount}</span>
                                        </div>
                                        <div className="subtitle">센서 상태</div>

                                        <div className="substance">
                                            <span className="left">전원 :</span>
                                            <span className="right">{this.state.sensorInf.powerStatus ? <i className="fas fa-check-circle"></i> : <i className="fas fa-times"></i>}</span>
                                        </div>
                                        <div className="substance">
                                            <span className="left">네트워크 :</span>
                                            <span className="right">{this.state.sensorInf.networkStatus ? <i className="fas fa-check-circle"></i> : <i className="fas fa-times"></i>}</span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="detail-bottom">
                                <WeeklyReport id={location.state.id} name={location.state.name} />
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