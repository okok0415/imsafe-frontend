import React from 'react'

export const SidebarDataSettings = [
    {
        title: "프로필",
        icon: <i className="fas fa-id-badge"></i>,
        link: "/settings/myprofile"
    },
    {
        title: "비밀번호 변경",
        icon: <i className="fas fa-key"></i>,
        link: "/settings/changepassword"
    }
];

export const SidebarDataInquiry = [
    {
        title: "노인 상태",
        icon: <i className="fas fa-hand-holding-heart"></i>,
        link: "/inquiry/state"
    },
    {
        title: "센서",
        icon: <i className="fas fa-hdd"></i>,
        link: "/inquiry/sensor"
    },
    {
        title: "알람",
        icon: <i className="fas fa-bell"></i>,
        link: "/inquiry/alarm"
    }
];
