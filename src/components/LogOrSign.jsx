import React from "react";

import Login from "../Login";
import Signup from "./Signup";

import "./LogOrSign.css";

const LogOrSign = ({setUser}) => {
    return (
        <div className="logorsign-wrapper">
            <Signup setUser={setUser}/>
            <Login setUser={setUser}/>
        </div>
    );
};

export default LogOrSign;