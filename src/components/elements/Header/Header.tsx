import React from 'react';

import {NavLink} from "react-router-dom";

import SearchIcon from "./SearchIcon.svg"
import css from "./Header.module.sass"

const Header = () => {
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
                <h4>Berdibekov Zaur</h4>
                <div className={css.Avatar}></div>
                <div className={css.Search}>
                    <img src={SearchIcon} alt=""/>
                </div>
            </div>
        </header>
    );
};

export default Header;