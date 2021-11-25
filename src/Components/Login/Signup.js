import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import loginIcon from "./icons/login.svg";
import IMSAFE from "../Navbar/icons/imsafe.png"
import "./CSS/Signup.css";
import { registerUser } from "../../Redux/Actions/userAction";
import { useDispatch } from "react-redux";


function Signup() {
    const [ID, setID] = useState(false)
    const [PW, setPW] = useState(false)
    const [PWC, setPWC] = useState(false)
    const [Email, setEmail] = useState(false)
    const dispatch = useDispatch()
    const [username, setUsername] = useState();
    const [emailvalue, setEmailvalue] = useState();
    const [password, setPassword] = useState();
    const [confpassword, setConfpassword] = useState();
    const [redirect, setRedirect] = useState(false);

    const handleID = () => setID(true)
    const handlePW = () => setPW(true)
    const handlePWC = () => setPWC(true)
    const handleEmail = () => setEmail(true)

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (password !== confpassword) {
            alert("비밀번호 불일치합니다.")
        }
        else {
            let body = {
                username: username,
                email: emailvalue,
                password: password,
            };
            dispatch(await registerUser(body))
            setRedirect(true);
        }

    };
    if (redirect) {
        return (<Redirect to="/" />)
    }

    return (
        <div>
            <div className="login container">
                <div className="login-content-signup">
                    <form onSubmit={onSubmitHandler}>
                        <img src={IMSAFE} height="70px" alt="" />
                        <div className={ID || username ? "input-div one focus" : "input-div one"}>
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>아이디</h5>
                                <input onClick={handleID} className="input" type="text" value={username} onChange={e => setUsername(e.currentTarget.value)} required />
                            </div>
                        </div>
                        <div className={Email || emailvalue ? "input-div one focus" : "input-div one"}>
                            <div className="i">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h5>이메일</h5>
                                <input onClick={handleEmail} className="input" type="text" value={emailvalue} onChange={e => setEmailvalue(e.currentTarget.value)} required />
                            </div>
                        </div>
                        <div className={PW || password ? "input-div two focus" : "input-div two"}>
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>비밀번호</h5>
                                <input onClick={handlePW} className="input" type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} required />
                            </div>
                        </div>
                        <div className={PWC || confpassword ? "input-div two focus" : "input-div two"}>
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>비밀번호 확인</h5>
                                <input onClick={handlePWC} className="input" type="password" value={confpassword} onChange={e => setConfpassword(e.currentTarget.value)} required />
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