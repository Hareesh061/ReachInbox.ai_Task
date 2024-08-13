

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter your credentials');
      return;
    }

    setError('');

    console.log({ email, password });

    navigate('/dashboard');
  };

  const handleSignUpRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <header className="flex justify-center items-center py-4 bg-black border-b border-gray-700">
        <img src="https://via.placeholder.com/24" alt="Logo" className="mr-2" />
        <h1 className="text-white font-bold text-xl">REACHINBOX</h1>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
          <h1 className="text-white text-xl font-semibold mb-5">Sign In to Your Account</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>} 
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 bg-gray-800 text-white rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 bg-gray-800 text-white rounded-lg"
            />
            <button
              type="submit"
              className="w-full p-2 mb-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Sign In
            </button>
          </form>
          <p className="text-gray-400">
            Don't have an account? <a href="#" className="text-blue-500 hover:underline" onClick={handleSignUpRedirect}>Sign Up</a>
          </p>
        </div>
      </main>

      <footer className="flex justify-center items-center py-1 bg-gray-900 border-t border-gray-700">
        <p className="text-white text-sm">© 2023 Reachinbox. All the best.</p>
      </footer>
    </div>
  );
};

export default SignIn;
