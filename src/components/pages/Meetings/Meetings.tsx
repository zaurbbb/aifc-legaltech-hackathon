import React from 'react';

import css from "./Meetings.module.sass"
import {NavLink} from "react-router-dom";

const Meetings = () => {
    return (
            <section className={css.Block}>
                <div className={css.CardsBlock}>
                    <div>
                        <button className={css.WhiteButton}>Current</button>
                        <h3>Meeting on the choice of the development program for the company LLP "XXX"</h3>
                        <h5>Место проведения / Ссылка</h5>
                        <button className={css.NextButton}>Go to the page</button>
                    </div>
                    <div>
                        <button className={css.RedButton}>20.09</button>
                        <button className={css.RedButton}>Извещение</button>
                        <h3>Meeting of the Board of Directors of LLP “XXX”</h3>
                        <button className={css.NextButton}>Go to the page</button>
                    </div>
                    <div>
                        <button className={css.RedButton}>Protocol</button>
                        <button className={css.RedButton}>Not approved</button>
                        <h3>Restructuring of LLP “XXX” processes</h3>
                        <button className={css.NextButton}>Go to the page</button>
                    </div>
                    <div>
                        <button className={css.WhiteButton}>Current</button>
                        <h3>In-person meeting on the choice of the development program for the company LLP "XXX"</h3>
                        <h5>Место проведения / Ссылка</h5>
                        <button className={css.NextButton}>Go to the page</button>
                    </div>
                </div>
                <NavLink to="/createMeeting" className={css.createButton}>Create a Meeting</NavLink>
        </section>
    );
};

export default Meetings;