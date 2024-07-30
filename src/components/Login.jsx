import {useState} from "react";

import { loginFetch } from "../../fetch";

const Login = ({setUser, user}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const changeHandler = (e, setter, state) => {
        setter(e.target.value);
        console.log(state)
    };
    console.log(user);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Hello from login handlesubmit");
        const data = await loginFetch(username, password);
        console.log(data);
        setUser(data.user);
    };

    return (
        <div>
            <h3>{!user ? <p>login</p> : <p>{user.username}</p>}</h3>
            <form onSubmit={handleSubmit}>
                <input placeholder="username" onChange={(e) => changeHandler(e, setUsername, username)}/>
                <input placeholder="password" onChange={(e) => changeHandler(e, setPassword, password)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;