import React from 'react'
import heart from "../../assets/favoriteicon.png";
import logout from "../../assets/logout.png";
import profile from "../../assets/profile.png";
import { Link } from 'react-router-dom';
import "./Footer.scss";


function Footer({ userId }) {
    return (
        <div className= "footer">
            <Link className="footer__link" to={`/favorites/${userId}`}>
            <img className="footer-heart" src={heart} alt="favorites page link"/>
            </Link>
            <Link className="footer__link"to={`/profile/${userId}`}>
            <img className="footer-profile" src={profile} alt="profile page link" />
            </Link>
            <Link className="footer__link"to="/">
            <img className="footer-logout" src={logout} alt="logout page link"/>
            </Link>
        </div>
    )
}

export default Footer
