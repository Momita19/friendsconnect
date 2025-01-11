import React from 'react';
import Signup from './pages/Signup.tsx';
import Home from './pages/Home.tsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.tsx';
const App = () => {
  return (
<Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
