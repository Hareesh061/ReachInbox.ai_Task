import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Login from './components/Login';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Onebox from './components/Onebox';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/onebox' element={<Onebox/>}/>
      </Routes>
    </Router>
  );
};

export default App;
