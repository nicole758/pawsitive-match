import React from 'react'
import logo from "../../assets/paw-logo.png";
import axios from 'axios';
import { useState } from 'react';
import "./Profile.scss";
import { Link } from 'react-router-dom';
import back from "../../assets/back.png";
import { useParams } from 'react-router-dom';
function Profile() {
    const [fullName, setFullName] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const { id } = useParams();
    const [name, setName] = useState('');


    const fetchName = () => {
        axios
            .get(`http://localhost:5050/users/${id}`)
            .then((response) => {
                setName(response.data.name);
            })
            .catch((error) => {
                console.error(error);
            });
    };




    function handleUpload(event) {
        event.preventDefault();

        const data = {
            name: fullName,
            number: number,
            address: address,
            city: city,
            state: state,
            zip: zip
        };


        axios.post('http://localhost:5050', data)
            .then(response => {
                console.log(response.data);
                setFullName("");
                setNumber("");
                setAddress("");
                setCity("");
                setZip("");
            })
            .catch(error => {
                console.log(error);
            });

    }

    fetchName();

    return (

        <div className="edit" onSubmit={handleUpload}>
            <form className="edit__form ">
                <div className='edit__form-flex'>
                    <Link className='edit__form-link' to={`/dashboard/${id}`}>
                        <img className='edit__form-back' src={back} alt="back button"></img>
                    </Link>
                    <img className="edit__form-logo" src={logo}></img>
                </div>
                <label className="edit__form__label" htmlFor="fullName">Name</label>
                <input className="edit__form__input" id="fullName" value={name} onChange={(e) => setFullName(e.target.value)} placeholder="John Doe"></input>
                <label className="edit__form__label" htmlFor="number">Number</label>
                <input className="edit__form__input" id="number" value={number} placeholder="888-888-8888" onChange={(e) => setNumber(e.target.value)}></input>
                <label className="edit__form__label" htmlFor="address">Address</label>
                <input className="edit__form__input" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="1234 sw 123 st"></input>
                <label className="edit__form__label" htmlFor="city">City</label>
                <input className="edit__form__input" id="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Miami"></input>
                <label className="edit__form__label" htmlFor="state">State</label>
                <input className="edit__form__input" id="state" value={state} onChange={(e) => setState(e.target.value)} placeholder="Florida"></input>
                <label className="edit__form__label" htmlFor="zip">Zip Code</label>
                <input className="edit__form__input" id="zip" value={zip} onChange={(e) => setZip(e.target.value)} placeholder="33186"></input>
                <Link className="edit__form__link" to="/dashboard">
                    <button className="edit__form__button" type="submit">Save</button>
                </Link>
            </form>
        </div>
    )
}

export default Profile
