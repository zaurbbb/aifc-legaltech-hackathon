import React from 'react';

import files from "./icons/Files.svg"

import css from "./CreateMeeting.module.sass";

const CreateMeeting = () => {
    return (
        <section className={css.Block}>
            <div className={css.createForm}>
                <h4>
                    Create a meeting
                </h4>
                <div>
                    <form action="">
                        <div>
                            <label>Executor</label>
                            <input
                                type="text"
                                className={css.UserIcon}
                                placeholder="Berdibekov Zaur"
                                style={{width: '100%'}}
                            ></input>
                        </div>
                        <div
                            style={{display: 'flex', flexDirection: 'row', gap: '0.5rem'}}
                        >
                            <div>
                                <label>Date</label>
                                <input
                                    type="text"
                                    className={css.DataIcon}
                                    placeholder="30.10.2022"
                                ></input>
                            </div>
                            <div>
                                <label>Time</label>
                                <input
                                    type="text"
                                    style={{width: '40%'}}
                                    placeholder="17:00"
                                    className={css.TimeIcon}
                                ></input>
                            </div>
                        </div>
                        <div>
                            <label>Area</label>
                            <input
                                type="text"
                                className={css.TimeIcon}
                                placeholder="Finance"
                                style={{width: '100%'}}
                            ></input>
                        </div>
                        <div>
                            <label>Collegial Body</label>
                            <input
                                type="text"
                                className={css.ArrowIcon}
                                placeholder="Board of Directors"
                                style={{width: '100%'}}
                            ></input>
                        </div>
                        <div>
                            <label>Question</label>
                            <input
                                type="text"
                                className={css.UnionIcon}
                                placeholder="Refinancing the tax industry"
                                style={{width: '100%'}}
                            ></input>
                        </div>
                        <div>
                            <label>Attach files</label>
                            <input
                                type="text"
                                className={css.AttachFilesIcon}
                                style={{width: '0%'}}
                            ></input>
                        </div>
                        <div>
                            <input
                                type="text"
                                className={css.BlockIcon}
                                style={{width: '25%'}}
                                placeholder="Unique Key"
                            ></input>
                        </div>
                    </form>
                </div>
            </div>
            <div className={css.additionalInfo}>
                <h4>
                    Прикрепленные документы:
                </h4>
                <br/>
                <div className={css.ImgFiles}>
                    <img src={files} alt="pdf file"/>
                    <img src={files} alt="pdf file"/>
                    <img src={files} alt="pdf file"/>
                    <img src={files} alt="pdf file"/>
                    <img src={files} alt="pdf file"/>
                    <img src={files} alt="pdf file"/>
                </div>
                <br/><br/><br/>
                <div>
                    <button style={{color: 'red'}}>Сброс</button>
                    <button style={{color: '#2C7CD9'}}>Создать</button>
                </div>
            </div>
        </section>
    );
};

export default CreateMeeting;