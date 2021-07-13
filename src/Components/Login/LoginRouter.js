import React from "react";
import Signin from "./Signin.js";
import Signup from "./Signup.js";

function SigninRouter() {

    return (
        <>
            <Signin />
        </>
    )
}

function SignupRouter() {

    return (
        <>
            <Signup />
        </>
    )
}

export { SigninRouter, SignupRouter };