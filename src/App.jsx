import React, { useEffect, useState } from 'react'; // Import useState and useEffect
import './App.css';
import FactsPage from './pages/FactsPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProgressPage from './pages/ProgressPage';
import BlogPage from './pages/BlogPage';
import Navbar from './compnents/Navbar'; // Import Navbar here

function App() {
  const [user, setUser] = useState(null); // Centralized user state

  // Load user from localStorage on initial app load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* Render Navbar outside Routes so it's always present */}
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/facts" element={<FactsPage />} />
          {/* Pass user state and setUser function to ProgressPage */}
          <Route path="/progress" element={<ProgressPage user={user} setUser={setUser} />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;