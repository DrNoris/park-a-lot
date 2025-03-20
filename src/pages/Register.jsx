import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!name || !email || !password) {
      setError('Toate câmpurile sunt necesare.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Formular trimis', { name, email, password });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 overflow-hidden">
      {/* Header fixat sus */}
      <header className="bg-alb text-white shadow-md fixed top-0 left-0 w-full">
        <div className="container mx-auto flex items-center justify-center p-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="src/assets/logo.png" alt="Park a Lot Logo" className="h-15 w-15 object-cover" />
          </Link>
        </div>
      </header>

      {/* Container centralizat */}
      <div className="flex flex-1 items-center justify-center px-4 pt-20">
        <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold text-center mb-6">Înregistrare</h2>

          {error && <div className="text-red-500 text-center mb-4">{error}</div>}

          <form onSubmit={handleSubmit}>
            {/* Nume */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nume</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Introduceti numele"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Introduceti email-ul"
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
                placeholder="Introduceti parola"
              />
            </div>

            {/* Butonul de trimitere */}
            <div className="mb-6">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-albastru text-white font-semibold rounded-md hover:bg-white hover:text-albastru hover:border focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Înregistrează-te
              </button>
            </div>

            {/* Link către pagina de login */}
            <div className="text-center">
              <p className="text-sm">
                Ai deja un cont? <Link to="/login" className="text-blue-600 hover:text-blue-800">Autentifică-te aici</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
