import React from 'react'
import Login from './Pages/Login'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Dashboard from './Pages/Dashboard';
import Telmovies from './Pages/Telmovies';
import Hinmovies from './Pages/Hinmovies';
import Tammovies from './Pages/Tammovies';
import Engmovies from './Pages/Engmovies';
import Malmovies from './Pages/Malmovies';
import Kanmovies from './Pages/Kanmovies';
import Kormovies from './Pages/Kormovies';
import Animovies from './Pages/Animovies';
import Teldetails from './Pages/Details/Teldetails'; 
import Hindetails from './Pages/Details/Hindetails';
import Tamdetails from './Pages/Details/Tamdetails';
import Engdetails from'./Pages/Details/Engdetails';
import Maldetails from './Pages/Details/Maldetails';
import Kandetails from './Pages/Details/Kandetails';
import Kordetails from './Pages/Details/Kordetails';
import Anidetails from './Pages/Details/Anidetails'
import Viewtel from './Pages/Viewtel';
import Viewhin from './Pages/Viewhin';
import Viewtam from './Pages/Viewtam';
import Vieweng from './Pages/Vieweng';

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
           <Route path="/vieweng" element={<Vieweng />} />
           <Route path="/telmovie" element={<Telmovies />} />
           <Route path="/hinmovie" element={<Hinmovies />} />
           <Route path="/tammovie" element={<Tammovies />} />
           <Route path="/engmovie" element={<Engmovies />} />
           <Route path="/malmovie" element={<Malmovies />} />
           <Route path="/kanmovie" element={<Kanmovies />} />
           <Route path="/kormovie" element={<Kormovies />} />
           <Route path="/animovie" element={<Animovies />} />
           <Route path="/telmovie/:id" element={<Teldetails />} />
           <Route path="/hinmovie/:id" element={<Hindetails />} />
           <Route path="/tammovie/:id" element={<Tamdetails />} />
           <Route path="/engmovie/:id" element={<Engdetails />} />
           <Route path="/malmovie/:id" element={<Maldetails />} />
           <Route path="/kanmovie/:id" element={<Kandetails />} />
           <Route path="/kormovie/:id" element={<Kordetails />} />
           <Route path="/animovie/:id" element={<Anidetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App