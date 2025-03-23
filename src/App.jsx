import './App.css'
import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Register from './pages/Register'; 
import Home from './pages/Home'
import Login from './pages/Login'
import FindSpot from './pages/FindSpot';
import CheckoutPage from './pages/CheckOut';
import AddParkingPage from './pages/AddParkingPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: false, 
    });
  }, []); 

  return (
    <Routes>
      <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/find_spot" element={<FindSpot isAuthenticated={isAuthenticated} />} />
      <Route path="/checkout" element={<CheckoutPage/>} />
      <Route path="/adauga_anunt" element={<AddParkingPage/>} />
    </Routes>
  );
}

export default App
