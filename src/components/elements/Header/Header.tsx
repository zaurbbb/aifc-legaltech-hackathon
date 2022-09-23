
import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import PersonIcon from "./img/PersonImage.png"
import SearchIcon from "./img/SearchIcon.svg"
import css from "./Header.module.sass"
import api from "../../../api";
import logo from './img/image.png'
const Header = () => {

    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        api.get('/getUser').then(res => {
            if (res.status === 200) {
                setEmail(res.data.email);
                setPhoto(res.data.photo);
                console.log(photo)
            }
        }).catch(e => {

        })
    }, [email, photo]);

    return (
        <header className={css.Block}>
            <div className={css.Hamburger}>
                <NavLink to="/">
                    <img src={logo} alt="logo"/>
                </NavLink>
            </div>
            <div className={css.Navbar}>
                <NavLink to="/createMeeting" className={navData => navData.isActive ? css.activeLink : css.inActiveLink}>
                    Create a Meeting
                </NavLink>
                <NavLink to="/schedule" className={navData => navData.isActive ? css.activeLink : css.inActiveLink}>
                    Meetings
                </NavLink>
                <NavLink to="/control" className={navData => navData.isActive ? css.activeLink : css.inActiveLink}>
                    Control
                </NavLink>
            </div>
            <div className={css.Info}>
                {email ? <h4>{email}</h4> : <a href="/login">Login</a>}
                <div className={css.Avatar}>
                    <img src={PersonIcon} alt="person"/>
                    <img src={photo} alt="avatar field"/>

                </div>
                <div className={css.Search}>
                    <img src={SearchIcon} alt="search field"/>
                </div>
            </div>
        </header>
    );
};

export default Header;