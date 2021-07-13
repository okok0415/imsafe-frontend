import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatarIcon from "./icons/avatar.png";
import loginIcon from "./icons/login.svg";
import "./CSS/Signup.css";


function Signup() {
    const [ID, setID] = useState(false)
    const [PW, setPW] = useState(false)
    const [PWC, setPWC] = useState(false)
    const [Email, setEmail] = useState(false)

    const handleID = () => setID(true)
    const handlePW = () => setPW(true)
    const handlePWC = () => setPWC(true)
    const handleEmail = () => setEmail(true)

    return (
        <div>
            <div className="login container">
                <div className="login-content-signup">
                    <form >
                        <img className="avatar" src={avatarIcon} alt="" />
                        <h2>IMSAFE</h2>
                        <div className={ID ? "input-div one focus" : "input-div one"}>
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>아이디</h5>
                                <input onClick={handleID} className="input" type="text" />
                            </div>
                        </div>
                        <div className={Email ? "input-div one focus" : "input-div one"}>
                            <div className="i">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h5>이메일</h5>
                                <input onClick={handleEmail} className="input" type="text" />
                            </div>
                        </div>
                        <div className={PW ? "input-div two focus" : "input-div two"}>
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>비밀번호</h5>
                                <input onClick={handlePW} className="input" type="password" />
                            </div>
                        </div>
                        <div className={PWC ? "input-div two focus" : "input-div two"}>
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>비밀번호 확인</h5>
                                <input onClick={handlePWC} className="input" type="password" />
                            </div>
                        </div>
                        <input type="submit" className="btn" value="회원가입" />
                    </form>
                </div>
                <div className="img-signup">
                    <div className="img-block">
                        <img src={loginIcon} alt="" />
                        <Link to="/login" className="register-link">이미 아이디가 있나요? 로그인</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;