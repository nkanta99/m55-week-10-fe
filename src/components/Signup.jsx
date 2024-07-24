import {useState} from "react";

const Signup = ({setUser}) => {
    const [password, setPassword] = useState("");
     const [email, setEmail] = useState("");
     const [username, setUsername] = useState("");

    const changeHandler = (e, setter, state) => {
        setter(e.target.value);
        console.log(state)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Hello from signup handlesubmit");
        // await setUser(user);
    };

  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          onChange={(e) => changeHandler(e, setUsername, username)}
        />
        <input
          placeholder="email"
          onChange={(e) => changeHandler(e, setEmail, email)}
        />
        <input
          placeholder="password"
          onChange={(e) => changeHandler(e, setPassword, password)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup