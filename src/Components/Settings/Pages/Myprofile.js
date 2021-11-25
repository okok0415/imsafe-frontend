import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../../Redux/Actions/userAction";
import "../CSS/Settings.css";


function Myprofile() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [datejoined, setDatejoined] = useState("")

    const dispatch = useDispatch();
    useEffect(() => {
        const i = dispatch(getUser);
        i.then((res) => {
            setUsername(res.payload.username)
            setEmail(res.payload.email)
            setDatejoined(res.payload.date_joined)

        })
    }, []);

    return (
        <>
            <div className='myprofile-content'>
                <div className='myprofile-profile'>
                    <div className="myprofile-title">
                        내 프로필
                    </div>
                    <div className="myprofile-instance">
                        <div className="left">아이디 </div>
                        <div className="right">{username}</div>
                    </div>
                    <div className="myprofile-instance">
                        <div className="left">이메일 주소 </div>
                        <div className="right">{email}</div>
                    </div>
                    <div className="myprofile-instance">
                        <div className="left">가입일 </div>
                        <div className="right">{datejoined}</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Myprofile;