import React, { useEffect, useState } from "react";
import "../styles/MyFriend.css";
import { apiClient } from "../apiClient.ts";

interface Friend {
  _id: string;
  username: string;
  avatar: string;
  email: string;
}

const MyFriends = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await apiClient.get("/friends/list");
        setFriends(response.data.friends || []); // Assuming the response contains a "friends" array
        setLoading(false);
      } catch (err: any) {
        setError("Failed to load friends. Please try again.");
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  return (
    <div className="my-friends-container">
      {/* <h1 className="title">My Friends</h1> */}

      {loading && <p>Loading friends...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && friends.length > 0 ? (
        <div className="friend-list">
          {friends.map((friend) => (
            <div key={friend._id} className="friend-card">
              <img
                src={
                  friend.avatar ||
                  "https://via.placeholder.com/100"
                }
                alt={`${friend.username}'s avatar`}
                className="friend-avatar"
              />
              <div className="friend-details">
                <h3>{friend.username}</h3>
                <p>{friend.email}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading &&
        !error && <p>No friends found. Start adding some!</p>
      )}
    </div>
  );
};

export default MyFriends;
