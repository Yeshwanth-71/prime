import React from 'react'
import Login from './Pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Dashboard from './Pages/Dashboard';
import Telmovies from './Pages/Telmovies';
import Hinmovies from './Pages/Hinmovies';
import Tammovies from './Pages/Tammovies';
import Viewtel from './Pages/Viewtel';
import Viewhin from './Pages/Viewhin';
import Viewtam from './Pages/Viewtam';

function App() {
  return (
    <div>
      <Router>
        <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/viewtel" element={<Viewtel />} />
           <Route path="/viewhin" element={<Viewhin />} />
           <Route path="/viewtam" element={<Viewtam />} />
           <Route path="/telmovie" element={<Telmovies />} />
           <Route path="/hinmovie" element={<Hinmovies />} />
           <Route path="/tammovie" element={<Tammovies />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App