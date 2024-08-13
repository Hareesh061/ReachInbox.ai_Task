import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ username, email, password });
  };

  const handleSignInRedirect = () => {
    navigate('/signin');
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <header className="flex justify-center items-center py-4 bg-black border-b border-gray-700">
        <img src="https://via.placeholder.com/24" alt="Logo" className="mr-2" />
        <h1 className="text-white font-bold text-xl">REACHINBOX</h1>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
          <h1 className="text-white text-xl font-semibold mb-5">Create Your Account</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 mb-4 bg-gray-800 text-white rounded-lg"
            />
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
              Sign Up
            </button>
          </form>
          <p className="text-gray-400">
            Already have an account? <a href="#" className="text-blue-500 hover:underline" onClick={handleSignInRedirect}>Sign In</a>
          </p>
        </div>
      </main>

      <footer className="flex justify-center items-center py-1 bg-gray-900 border-t border-gray-700">
        <p className="text-white text-sm">© 2023 Reachinbox. All the best.</p>
      </footer>
    </div>
  );
};

export default Signup;
