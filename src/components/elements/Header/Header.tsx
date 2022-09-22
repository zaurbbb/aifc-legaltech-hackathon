import React, {useEffect, useState} from 'react';

import {NavLink} from "react-router-dom";

import SearchIcon from "./SearchIcon.svg"
import css from "./Header.module.sass"
import api from "../../../api";

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
            <div className={css.Hamburger}>h</div>
            <div className={css.Navbar}>
                <NavLink to="/schedule" className={navData => navData.isActive ? css.activeLink : css.inActiveLink}>
                    Meetings
                </NavLink>
                <NavLink to="/protocolBook" className={navData => navData.isActive ? css.activeLink : css.inActiveLink}>
                    Results
                </NavLink>
                <NavLink to="/control" className={navData => navData.isActive ? css.activeLink : css.inActiveLink}>
                    Control
                </NavLink>
            </div>
            <div className={css.Info}>
                {email ? <h4>{email}</h4> : <a href="/login">Login</a>}
                <div className={css.Avatar}>
                    <img src={photo} alt=""/>
                </div>
                <div className={css.Search}>
                    <img src={SearchIcon} alt=""/>
                </div>
            </div>
        </header>
    );
};

export default Header;