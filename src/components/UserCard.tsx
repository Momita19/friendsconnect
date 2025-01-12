import React from "react";
import "../styles/UserCard.css";

const UserCard = ({ profile }) => {
  return (
    <div className="user-card">
      <img src="https://via.placeholder.com/150" alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.bio}</p>
      <button>Add Friend</button>
    </div>
  );
};

export default UserCard;
