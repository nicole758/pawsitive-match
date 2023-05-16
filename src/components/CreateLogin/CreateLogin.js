import React from 'react'
import logo from "../../assets/paw-logo.png";
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./CreateLogin.scss";

function CreateLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");


    function handleUpload(event) {
        event.preventDefault();

        const data = {
            username: username,
            password: password,
            name:name,
            email:email
        };
    
    axios.post('http://localhost:5050/users/create', data)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });

}


    return(
        <div className="create" onSubmit={handleUpload}>
            <form className="create__login ">
            <img className="create-logo"src={logo}></img>
            <label className="create__login__label"htmlFor="name">Name</label>
            <input className="create__login__input" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"></input>
            <label className="create__login__label"htmlFor="username">Username</label>
            <input className="create__login__input" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"></input>
            <label className="create__login__label"htmlFor="email">Email</label>
            <input className="create__login__input" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
            <label className="create__login__label"htmlFor="password">Password</label>
            <input className="create__login__input" id="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
            <Link className="create__login__link" to="/">
            <button className="create__login__button"type="submit" >Submit</button>
            </Link>
            </form>
        </div>

    );
}

export default CreateLogin
