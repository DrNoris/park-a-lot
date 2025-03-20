import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Importă useNavigate

function Login({onLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      setError('Toate câmpurile sunt necesare.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Aici poți adăuga logica pentru autentificare (ex: trimitere către API)
      if (email === "admin@gmail.com" && password === "admin") {
        console.log('Autentificare reușită ca admin...');
        onLogin();
        navigate('/');
      } else {
        console.log('Autentificare nereușită...', { email, password });
        setError('Email sau parolă incorecte'); // Arată un mesaj de eroare
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 overflow-hidden">
          {/* Header fixat sus */}
          <header className="bg-alb text-white shadow-md fixed top-0 left-0 w-full">
            <div className="container mx-auto flex items-center justify-center p-4">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <img src="logo.png" alt="Park a Lot Logo" className="h-15 w-15 object-cover" />
              </Link>
            </div>
          </header>
      <div className="flex flex-1 items-center justify-center px-4 pt-20">
        <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold text-center mb-6">Autentificare</h2>
        
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Introdu email-ul"
            />
          </div>

          {/* Parola */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Parola</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Introdu parola"
            />
          </div>

          {/* Butonul de autentificare */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-albastru text-white font-semibold rounded-md hover:bg-white hover:text-albastru hover:border focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Autentifică-te
            </button>
          </div>

          {/* Link către înregistrare */}
          <div className="text-center">
            <p className="text-sm">
              Nu ai cont? <Link to="/register" className="text-blue-600 hover:text-blue-800">Înregistrează-te aici</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
