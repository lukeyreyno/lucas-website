import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import './App.css';

const App: React.FC = () => {
    return (
        <HashRouter>
            <NavBar />
            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </main>
        </HashRouter>
    );
};

export default App;
