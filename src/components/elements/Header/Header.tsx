import React, {useEffect, useState} from 'react';

import {NavLink} from "react-router-dom";

import SearchIcon from "./SearchIcon.svg"
import css from "./Header.module.sass"
import api from "../../../api";

const Header = () => {
    const [email, setEmail] = useState(null);

    useEffect(() => {
        api.get('/getUser').then(res => {
            if (res.status === 200) {
                setEmail(res.data.email);
            }
        }).catch(e => {

        })
    });

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
                {email ? <h4>{email}</h4> : <h4>Login</h4>}
                <div className={css.Avatar}></div>
                <div className={css.Search}>
                    <img src={SearchIcon} alt=""/>
                </div>
            </div>
        </header>
    );
};

export default Header;