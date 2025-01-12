import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const users = ["Emily Johnson", "Michael Brown", "Sophia Martinez"];

  return (
    <aside className="sidebar">
      <ul className="user-list">
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      <div className="profile">
        <img src="https://via.placeholder.com/50" alt="Profile" />
        <div>
          <p>Amanda</p>
          <a href="#">View profile</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
