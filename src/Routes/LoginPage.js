import React, { useState } from "react";
import Login from "../Components/Login.js";
import Books from "../Components/books.js";

function Loginpage() {

    const [token, setToken] = useState('');

    const userLogin = (tok) => {
        setToken(tok);
    }
    return (
        <div>
            <Login userLogin={userLogin} />
            <Books token={token} />
        </div>

    )
}

export default Loginpage;