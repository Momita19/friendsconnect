import React, { useEffect, useState } from "react";
import UserCard from "./UserCard.tsx";
import "../styles/UserProflie.css";
import SearchInput from "./Search.tsx";
import { getAllUser } from "../api/getAllUsers.js";
import { apiClient } from "../apiClient.ts";

const UserProfiles = () => {
  const [profiles, setProfiles] = useState([]); // Store user profiles
  const [query, setQuery] = useState(""); // Search query for filtering
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [page, setPage] = useState(1); // Track the current page
  const [hasMore, setHasMore] = useState(true); // Determine if more profiles can be loaded
  const [sentRequests, setSentRequests] = useState([]); // Track sent requests

  const fetchUsers = async (currentPage = 1) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllUser(currentPage, 8, query); // Pass page and query
      if (data.data.length < 8) {
        setHasMore(false); // No more profiles if the result is less than 8
      } else {
        setHasMore(true); // There might be more profiles
      }
      if (currentPage === 1) {
        setProfiles(data.data); // Replace profiles for the first page or new search
      } else {
        setProfiles((prevProfiles) => [...prevProfiles, ...data.data]); // Append profiles for subsequent pages
      }
    } catch (err) {
      setError("Failed to fetch user profiles.");
    } finally {
      setLoading(false);
    }
  };

  const fetchSentRequests = async () => {
    try {
      const response = await apiClient("/friends/requests");
      const data = await response.json();
      console.log(data, "??data")
      setSentRequests(data.sentRequests);
      console.log(sentRequests, "ajjd")
    } catch (err) {
      console.error("Failed to fetch sent requests:", err);
    }
  };

  useEffect(() => {
    setPage(1); // Reset to page 1 when the query changes
    fetchUsers(1); // Fetch data for the first page
  }, [query]);

  useEffect(() => {
    fetchSentRequests(); // Fetch sent friend requests on component mount
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchUsers(nextPage);
  };

  const isRequestSent = (userId) => sentRequests.includes(userId);

  return (
    <section className="user-profiles">
      <SearchInput setQuery={setQuery} />
      <div className="division-users">
        <h2>User Profiles</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        <div className="profiles-grid">
          {profiles.map((profile) => (
            <UserCard
              key={profile._id}
              profile={profile}
              isRequestSent={isRequestSent(profile._id)}
            />
          ))}
        </div>
        {hasMore && !loading && (
          <button className="load-more-btn" onClick={loadMore}>
            Load More
          </button>
        )}
        {!hasMore && <p className="no-more-profile">No more profiles to load.</p>}
      </div>
    </section>
  );
};

export default UserProfiles;
