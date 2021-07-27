import React from 'react'

export const SidebarDataSettings = [
    {
        id: 1,
        title: "프로필",
        icon: <i className="fas fa-id-badge"></i>,
        link: "/settings/myprofile"
    },
    {
        id: 2,
        title: "비밀번호 변경",
        icon: <i className="fas fa-key"></i>,
        link: "/settings/changepassword"
    }
];

export const SidebarDataInquiry = [
    {
        id: 1,
        title: "노인 상태",
        icon: <i className="fas fa-hand-holding-heart"></i>,
        link: "/inquiry/state"
    },
    {
        id: 2,
        title: "센서",
        icon: <i className="fas fa-hdd"></i>,
        link: "/inquiry/sensor"
    },
    {
        id: 3,
        title: "알람",
        icon: <i className="fas fa-bell"></i>,
        link: "/inquiry/alarm"
    }
];
