import React, {useState} from 'react';

import files from "./icons/Files.svg"

import css from "./CreateMeeting.module.sass";
import api from "../../../api";

const CreateMeeting = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [area, setArea] = useState("");
    const [question, setQuestion] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const user = await api.get('/getUser');
        api.post('/createMeeting', {
            creatorUID: user.data.uid,
            name,
            date,
            time,
            area,
            question
        }).then(res => {
            if (res.status === 200) {
                console.log('success');
                window.location.href = "http://localhost:3000/";
            } else {
                console.log(res.data);
            }
        }).catch(e => {
            console.log(e);
        })
    };
    return (
        <section className={css.Block}>
            <div className={css.createForm}>
                <h4>
                    Create a meeting
                </h4>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Executor</label>
                            <input
                                type="text"
                                className={css.UserIcon}
                                value={name}
                                placeholder="Berdibekov Zaur"
                                onChange={(e) => setName(e.target.value)}
                                style={{width: '100%'}}
                            >
                            </input>
                        </div>
                        <div
                            style={{display: 'flex', flexDirection: 'row', gap: '0.5rem'}}
                        >
                            <div>
                                <label>Date</label>
                                <input
                                    type="text"
                                    className={css.DataIcon}
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    placeholder="30.10.2022"
                                >

                                </input>
                            </div>
                            <div>
                                <label>Time</label>
                                <input
                                    type="text"
                                    style={{width: '40%'}}
                                    placeholder="17:00"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className={css.TimeIcon}
                                >

                                </input>
                            </div>
                        </div>
                        <div>
                            <label>Area</label>
                            <input
                                type="text"
                                className={css.TimeIcon}
                                placeholder="Finance"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                style={{width: '100%'}}
                            >

                            </input>
                        </div>
                        <div>
                            <label>Collegial Body</label>
                            <input
                                type="text"
                                className={css.ArrowIcon}
                                placeholder="Board of Directors"
                                style={{width: '100%'}}
                            >

                            </input>
                        </div>
                        <div>
                            <label>Question</label>
                            <input
                                type="text"
                                className={css.UnionIcon}
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder="Refinancing the tax industry"
                                style={{width: '100%'}}
                            >

                            </input>
                        </div>
                        <div>
                            <label>Attach files</label>
                            <input
                                type="text"
                                className={css.AttachFilesIcon}
                                style={{width: '0%'}}
                            >

                            </input>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className={css.BlockIcon}
                                style={{width: '25%'}}

                            >
                                Unique Key
                            </button>
                        </div>
                    </form>

                </div>
            </div>
            <div className={css.additionalInfo}>
                <h4>
                    Attached documents:
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
                    <button style={{color: 'red'}}>Reset</button>
                    <button style={{color: '#2C7CD9'}}>Create</button>
                </div>
            </div>
        </section>
    )
        ;
};

export default CreateMeeting;