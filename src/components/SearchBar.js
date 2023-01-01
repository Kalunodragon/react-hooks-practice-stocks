import React from "react";

function SearchBar({ sortBy, handleChange, filterBy, handleFilter }) {
  function sortChange(e) {
    handleChange(e.target.value);
  }

  function filterChange(e) {
    handleFilter(e.target.value);
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy === "Alphabetically"}
          onChange={sortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy === "Price"}
          onChange={sortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={filterChange} value={filterBy}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;