import React from "react";
import "../styles/SuggestedFriends.css";

const SuggestedFriends = () => {
  const suggestions = [
    { name: "John Doe" },
    { name: "Jane Smith" },
    { name: "Alex Johnson" },
    { name: "Emily Davis" },
  ];

  return (
    <section className="suggested-friends">
      
      <h2>Suggested Friends</h2>
      <div className="suggestions-grid">
        {suggestions.map((friend) => (
          <div key={friend.name} className="friend-card">
            <img src="https://via.placeholder.com/50" alt={friend.name} />
            <div>
              <p>{friend.name}</p>
              <button>Add Friend</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuggestedFriends;
