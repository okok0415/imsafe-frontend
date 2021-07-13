import React from "react";
import Home from "./Home.js";
import Navbar from "../Navbar/Navbar.js";

function HomeRouter() {

    return (
        <>
            <Navbar />
            <Home />
        </>
    )
}

export { HomeRouter };