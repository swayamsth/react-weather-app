import React, { useState } from "react";
import styles from "./search.module.css";

const Search = ({ setCity }) => {
  const [search, setSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setCity(search);
  }

  return (
    <form className={styles.searchBox} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          value={search}
          placeholder="Enter weather location.."
        />
        <button className={styles.searchButton} type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Search;
