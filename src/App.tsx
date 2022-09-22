import React from 'react';

import './App.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import MainPage from "./components/pages/MainPage";
import Test from "./components/elements/Test";
import Header from "./components/elements/Header/Header";
import CreateMeeting from "./components/pages/CreateMeeting";

function App() {
  return (
    <BrowserRouter>
        <Header />

        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/schedule" element={<Test />}/>
            <Route path="/createMeeting" element={<CreateMeeting />}/>
            <Route path="/protocolBook" element={<Test />}/>
            <Route path="/control" element={<Test />}/>
            <Route path="/usersList" element={<Test />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
