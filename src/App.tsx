import React from 'react';

import './App.css';

import {Route, Routes, BrowserRouter} from 'react-router-dom';

import Test from "./components/elements/Test";
import Header from "./components/elements/Header/Header";
import CreateMeeting from "./components/pages/CreateMeeting/CreateMeeting";
import Login from "./components/pages/LoginPage/Login";
import MainPage from "./components/pages/MainPage/MainPage";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/schedule" element={<Test/>}/>
                <Route path="/createMeeting" element={<CreateMeeting/>}/>
                <Route path="/protocolBook" element={<Test/>}/>
                <Route path="/control" element={<Test/>}/>
                <Route path="/usersList" element={<Test/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
