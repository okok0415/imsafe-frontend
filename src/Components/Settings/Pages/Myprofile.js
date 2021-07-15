import React from "react";
import "../CSS/Settings.css";

function Myprofile() {
    return (
        <>
            <div className='myprofile-content'>
                <div className='myprofile-profile'>
                    <div className="myprofile-title">
                        내 프로필
                    </div>
                    <div className="myprofile-instance">
                        <div className="left">아이디 </div>
                        <div className="right">okok0415</div>
                    </div>
                    <div className="myprofile-instance">
                        <div className="left">이메일 주소 </div>
                        <div className="right">dlawjdals11@naver.com</div>
                    </div>
                    <div className="myprofile-instance">
                        <div className="left">가입일 </div>
                        <div className="right">2021-07-15</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Myprofile;