import React from "react";
import Create from "./Create.js";
import Navbar from "../Navbar/Navbar.js";


export const CreateRouter = ({ match }) => {
    return (
        <>
            <Navbar />
            <Create />
        </>
    )
}

