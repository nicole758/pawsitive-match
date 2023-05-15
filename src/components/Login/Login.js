import { useState } from "react";
import axios from "axios";
import "./Login.scss";
import logo from "../../assets/paw-logo.png";
import { Link } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleUpload(event) {
        event.preventDefault();

        const data = {
            username: username,
            password: password
        };

        axios
            .post("http://localhost:5050/users/login", data)
            .then(response => {
                setUsername("");
                setPassword("");
                setError("");
                if (response.data) { // Check if response data is not empty
                    window.location.href = "/dashboard";
                  } else {
                    setError("Invalid username or password");
                  }
            })
            .catch(error => {
                console.log(error);
                setError("An error occurred during login");
            });
    }

    return (
        <div className="main" onSubmit={handleUpload}>
            <form className="main__login ">
                <img className="main-logo" src={logo} alt="Logo" />
                <label className="main__login__label" htmlFor="username">
                    Username
                </label>
                <input
                    className="main__login__input"
                    id="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <label className="main__login__label" htmlFor="password">
                    Password
                </label>
                <input
                    className="main__login__input"
                    id="password"
                    value={password}
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="main__login__button" type="submit">
                    Login
                </button>
            </form>
            {error && <p className="main__error">{error}</p>}
            <div className="main__button-wrapper">
                <Link className="main__login__link" to="/createAccount">
                    <button className="main__button-create">Create Account</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;