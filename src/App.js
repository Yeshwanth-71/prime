import React from 'react'
import Login from './Pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Dashboard from './Pages/Dashboard';
import Newmovies from './Pages/Newmovies';
import View from './Pages/View';

function App() {
  return (
    <div>
      <Router>
        <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/view" element={<View />} />
           <Route path="/movie" element={<Newmovies />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App