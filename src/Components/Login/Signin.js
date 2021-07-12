import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatarIcon from "./icons/avatar.png";
import loginIcon from "./icons/login.svg";
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
                    <img src={loginIcon} alt="" />
                </div>
                <div className="login-content">
                    <form >
                        <img className="avatar" src={avatarIcon} alt="" />
                        <h2>IMSAFE</h2>
                        <div className={ID ? "input-div one focus" : "input-div one"}>
                            <div className="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>ID</h5>
                                <input onClick={handleID} className="input" type="text" />
                            </div>
                        </div>
                        <div className={PW ? "input-div two focus" : "input-div two"}>
                            <div className="i">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input onClick={handlePW} className="input" type="password" />
                            </div>
                        </div>
                        <Link to="/" className="login-link">비밀번호를 잊어먹었습니까?</Link>
                        <input type="submit" className="btn" value="로그인" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin;