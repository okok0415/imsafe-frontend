import React, { useState } from "react";
import { Link } from "react-router-dom";

import loginIcon from "./icons/login.svg";
import IMSAFE from "../Navbar/icons/imsafe.png"
import "./CSS/Signin.css";


function Signin() {
    const [ID, setID] = useState(false)
    const [PW, setPW] = useState(false)

    const handleID = () => setID(true)
    const handlePW = () => setPW(true)

    return (
        <div>
            <div className="login container">
                <div className="img">
                    <div className="img-block">
                        <img src={loginIcon} alt="" />
                        <Link to="/register" className="register-link">생성된 아이디가 없나요? 회원가입</Link>
                    </div>
                </div>
                <div className="login-content">
                    <form >
                        <img src={IMSAFE} height="70px" alt="" />
                        <div className={ID ? "input-div one focus" : "input-div one"}>
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>아이디</h5>
                                <input onClick={handleID} className="input" type="text" />
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
                        <input type="submit" className="btn" value="로그인" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin;