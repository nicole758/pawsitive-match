import { useState } from "react";
import axios from "axios";
import "./Login.scss";

function Login(){
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");


    function handleUpload(event) {
        event.preventDefault();

        const data = {
            user: user,
            pass: pass
        };
    
    axios.post('http://localhost:5050', data)
    .then(response => {
        console.log(response.data);
        setUser("");
        setPass("");
    })
    .catch(error => {
        console.log(error);
    });

}


    return(

        <div className="main" onSubmit={handleUpload}>
            <h1 className="main__title">Pawsitive Match</h1>
            <form className="main__login ">
            <label className="main__login__label"htmlFor="username">Username</label>
            <input className="main__login__input" id="username" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Username"></input>
            <label className="main__login__label"htmlFor="password">Password</label>
            <input className="main__login__input" id="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)}></input>
            <button className="main__login__button" type="submit" >Login</button>
            </form>
            <div className="main__button-wrapper">
            <button className="main__button-create">Create Account</button>
            </div>
        </div>

    );

}

export default Login;