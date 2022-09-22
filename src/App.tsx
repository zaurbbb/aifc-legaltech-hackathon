import React from 'react';

import './App.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import MainPage from "./components/pages/MainPage";
import Test from "./components/elements/Test";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/schedule" element={<Test />}/>
            <Route path="/createMeeting" element={<MainPage />}/>
            <Route path="/protocolBook" element={<Test />}/>
            <Route path="/usersList" element={<Test />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
