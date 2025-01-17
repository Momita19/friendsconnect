import React, { useState , useEffect} from "react";
import "../styles/UserCard.css";
import { apiClient } from "../apiClient.ts";

const UserCard = ({ profile, isRequestSent }) => {
  const [friendRequestStatus, setFriendRequestStatus] = useState(
    isRequestSent ? "Request Sent" : "Add Friend"
  );
  console.log(isRequestSent, "is request sent??")

  const handleAddFriend = async () => {
    try {
      const response = await apiClient.post("friends/request", {
        targetUserId: profile._id,
      });

      if (response.status === 200) {
        setFriendRequestStatus("Request Sent");
      } else {
        setFriendRequestStatus("Error");
        console.error("Failed to send friend request.");
      }
    } catch (err) {
      setFriendRequestStatus("already sent");
      console.error("Error while sending friend request:", err);
    }
  };

  useEffect(() => {
    if (isRequestSent) {
      setFriendRequestStatus("Request Sent");
    }
  }, [isRequestSent]);


  return (
    <div className="user-card">
      <img
        src={
          profile.avatar ||
          "https://helpingimagesq.s3.us-west-2.amazonaws.com/download.jpeg"
        }
        alt={profile.name}
      />
      <div className="user-info">
        <h3>{profile.username}</h3>
        <p>{profile.bio || "No bio available"}</p>
        <button
          className={`add-friend-btn ${
            friendRequestStatus === "Request Sent" ? "btn-success" : ""
          }`}
          onClick={handleAddFriend}
          disabled={friendRequestStatus === "Request Sent"}
        >
          {friendRequestStatus}
        </button>

      </div>
    </div>
  );
};

export default UserCard;
