import React, { useEffect, useState } from "react";
import "../styles/Sidebar.css";
import { apiClient } from "../apiClient.ts";
import MyFriends from "./MyFriends.tsx";

interface Friend {
  _id: string;
  username: string;
  email: string;
}

const Sidebar = () => {
  const [users, setUsers] = useState<Friend[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const data = await apiClient("/friends/requests");
        console.log(data)
        setUsers(data.data.friends || []); // Assuming `data.friends` contains the friend list
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  const handleAcceptRequest = async (requesterId: string) => {
    try {
      const response = await apiClient.post("/friends/accept", { requesterId });
      if (response.status === 200) {
        // Update the user list by filtering out the accepted request
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== requesterId));
        console.log("Friend request accepted successfully.");
      } else {
        console.error("Failed to accept the friend request.");
      }
    } catch (err: any) {
      console.error("Error while accepting the friend request:", err.message);
    }
  };

  return (
<aside className="sidebar">
  <h1>My friends</h1>
  <div>
    <MyFriends/>
  </div>
      <h1 className="friends">Friend Requests</h1>

      {loading && <p>Loading friend requests...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <ul className="user-list">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user._id} className="user-item">
                <div className="request-div">
                <span>{user.username}</span>
                <button
                  className="accept-btn"
                  onClick={() => handleAcceptRequest(user._id)}
                >
                  Accept
                </button>
                </div>
                
              </li>
            ))
          ) : (
            <li>No friend requests available</li>
          )}
        </ul>
      )}

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
