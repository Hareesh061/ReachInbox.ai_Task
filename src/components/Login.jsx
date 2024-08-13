import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSignUp = () => {
    //Google OAuth URL
    window.location.href = "https://accounts.google.com/o/oauth2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email";
  };

  const handleCreateAccount = () => {
    navigate('/signup');
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
          <h1 className="text-white text-xl font-semibold mb-5">Create a new account</h1>
          <button
            className="flex items-center justify-center w-full p-3 mb-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
            onClick={handleGoogleSignUp}
          >
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Icon" className="mr-2" />
            Sign Up with Google
          </button>
          <div className="flex justify-center mb-4">
            <button
              className="flex items-center justify-center w-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={handleCreateAccount}
            >
              Create an Account
            </button>
          </div>
          <p className="text-gray-400">
            Already have an account? <a href="#" className="text-blue-500 hover:underline" onClick={handleSignInRedirect}>Sign In</a>
          </p>
        </div>
      </main>

      <footer className="flex justify-center items-center py-1 bg-gray-900 border-t border-gray-700">
        <p className="text-white text-sm">© 2023 Reachinbox. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
