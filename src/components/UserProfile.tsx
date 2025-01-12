import React from "react";
import UserCard from "./UserCard.tsx";
import "../styles/UserProflie.css";

const UserProfiles = () => {
  const profiles = [
    { name: "Emily Chen", bio: "Enjoying a sunny day!" },
    { name: "John Smith", bio: "Loving my new job!" },
    { name: "Sarah Lee", bio: "Exploring the mountains" },
    { name: "David Kim", bio: "Capturing moments" },
    { name: "Olivia Taylor", bio: "Feeling zen" },
    { name: "Alex Brown", bio: "Strumming some tunes" },
  ];

  return (
    <section className="user-profiles">
      <h2>User Profiles</h2>
      <div className="profiles-grid">
        {profiles.map((profile) => (
          <UserCard key={profile.name} profile={profile} />
        ))}
      </div>
    </section>
  );
};

export default UserProfiles;
