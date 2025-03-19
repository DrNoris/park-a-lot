import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
      console.log('Autentificare...', { email, password });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
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
  );
}

export default Login;
