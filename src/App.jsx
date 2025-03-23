import './App.css'
import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register'; 
import Home from './pages/Home'
import Login from './pages/Login'
import FindSpot from './pages/FindSpot';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Routes>
      <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/find_spot" element={<FindSpot isAuthenticated={isAuthenticated} />} />
    </Routes>
  );
}

export default App
