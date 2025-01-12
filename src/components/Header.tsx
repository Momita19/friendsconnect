import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">FriendConnect</h1>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="#">Friend Request</a>
        <a href="#">Friends Search</a>
        <a href="#">Recommendation</a>
      </nav>
      <div className="header-right">
        <input type="text" placeholder="Search..." />
        <button>🔔</button>
        <button>👤</button>
      </div>
    </header>
  );
};

export default Header;
