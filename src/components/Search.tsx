import React, { useState, useEffect } from "react";
import "../styles/Search.css";

function SearchInput({ setQuery }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setQuery(input); // Trigger query update after a delay
    }, 500); // Adjust debounce time as needed (e.g., 300ms, 500ms)

    return () => clearTimeout(delayDebounce); // Cleanup timeout on component unmount or input change
  }, [input, setQuery]);

  const handleSearchChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="search-container">
        <h1>Search Users</h1>
      <input
        type="text"
        value={input}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="search-input"
      />
    </div>
  );
}

export default SearchInput;
