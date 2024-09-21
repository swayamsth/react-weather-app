import React, { useState } from "react";

const Search = ({ setCity }) => {
  const [search, setSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setCity(search);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          value={search}
          placeholder="Enter weather location.."
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default Search;
