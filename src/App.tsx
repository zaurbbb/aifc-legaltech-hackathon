import React from 'react';

import './App.css';

import {Route, Routes, BrowserRouter} from 'react-router-dom';

import HomePage from "./components/pages/HomePage/HomePage";
import Test from "./components/elements/Test";
import Header from "./components/elements/Header/Header";
import CreateMeeting from "./components/pages/CreateMeeting/CreateMeeting";
import Login from "./components/pages/LoginPage/Login";
import Meetings from "./components/pages/Meetings/Meetings";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/schedule" element={<Meetings />}/>
                <Route path="/createMeeting" element={<CreateMeeting />}/>
                <Route path="/protocolBook" element={<Test />}/>
                <Route path="/control" element={<Test />}/>
                <Route path="/usersList" element={<Test />}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
