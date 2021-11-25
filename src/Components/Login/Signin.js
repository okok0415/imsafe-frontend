import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import loginIcon from "./icons/login.svg";
import IMSAFE from "../Navbar/icons/imsafe.png"
import "./CSS/Signin.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/Actions/userAction";


function Signin() {
    const [ID, setID] = useState(false)
    const [PW, setPW] = useState(false)

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState(false);

    const handleID = () => setID(true)
    const handlePW = () => setPW(true)
    const dispatch = useDispatch();


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        let body = {
            username: username,
            password: password,
        };
        dispatch(await loginUser(body))
        setRedirect(true);
    };

    if (redirect) {
        return (<Redirect to="/" />)
    }

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
                    <form onSubmit={onSubmitHandler}>
                        <img src={IMSAFE} height="70px" alt="" />
                        <div className={ID || username ? "input-div one focus" : "input-div one"}>
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>아이디</h5>
                                <input onClick={handleID} className="input" type="text" value={username} onChange={e => setUsername(e.currentTarget.value)} />
                            </div>
                        </div>
                        <div className={PW || password ? "input-div two focus" : "input-div two"}>
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>비밀번호</h5>
                                <input onClick={handlePW} className="input" type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
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