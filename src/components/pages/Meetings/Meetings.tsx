import React from 'react';

import calendarImg from "./img/calendarImg.svg"

import css from "./Meetings.module.sass"

import Rectangle1 from './img/Rectangle 127.svg'
import Ellipse1 from './img/Ellipse 12.svg'

const Meetings = () => {
    return (
        <section className={css.Block}>
            <div className={css.CardsCollection}>
                <div className={css.Card}>
                    <div>
                        <img src={Rectangle1} alt="avatar of work"/>
                    </div>
                    <div>
                        <h4>
                            Berdibekov Zaur
                        </h4>
                        <h5>
                            <img src={Ellipse1} alt="green ellipse"/>
                            In work
                        </h5>
                    </div>
                    <div>
                        <h4>Accept the plan for increasing Director's salary</h4>
                        <h5>Deadline: 03.10.2022</h5>
                    </div>
                </div>
                <div className={css.Card}>
                    <div>
                        <img src={Rectangle1} alt="avatar of work"/>
                    </div>
                    <div>
                        <h4>
                            Berdibekov Zaur
                        </h4>
                        <h5>
                            <img src={Ellipse1} alt="green ellipse"/>
                            In work
                        </h5>
                    </div>
                    <div>
                        <h4>Accept the plan for increasing Director's salary</h4>
                        <h5>Deadline: 03.10.2022</h5>
                    </div>
                </div>
                <div className={css.Card}>
                    <div>
                        <img src={Rectangle1} alt="avatar of work"/>
                    </div>
                    <div>
                        <h4>
                            Berdibekov Zaur
                        </h4>
                        <h5>
                            <img src={Ellipse1} alt="green ellipse"/>
                            In work
                        </h5>
                    </div>
                    <div>
                        <h4>Accept the plan for increasing Director's salary</h4>
                        <h5>Deadline: 03.10.2022</h5>
                    </div>
                </div>
            </div>
            <div>
                <img src={calendarImg} alt="calendar"/>
            </div>
        </section>
    );
};

export default Meetings;