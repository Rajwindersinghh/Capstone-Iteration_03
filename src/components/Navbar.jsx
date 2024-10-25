import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="app-title">
        TASK MANAGER APP
      </div>
      <div className="nav-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/tasks" className="navbar-link">Tasks</Link>
        <Link to="/contacts" className="navbar-link">Contacts</Link>
      </div>
    </nav>
  );
};

export default Navbar;
