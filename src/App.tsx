import React from 'react';

import './App.css';

import {Route, Routes} from 'react-router-dom';

import HomePage from "./components/pages/HomePage/HomePage";
import Test from "./components/elements/Test";
import CreateMeeting from "./components/pages/CreateMeeting/CreateMeeting";
import Login from "./components/pages/LoginPage/Login";
import Meetings from "./components/pages/Meetings/Meetings";

function App() {
    return (
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/schedule" element={<Meetings />}/>
                <Route path="/createMeeting" element={<CreateMeeting />}/>
                <Route path="/protocolBook" element={<Test />}/>
                <Route path="/control" element={<Test />}/>
                <Route path="/usersList" element={<Test />}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
    );
}

export default App;
