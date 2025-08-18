import './App.css'
import React from 'react'
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
