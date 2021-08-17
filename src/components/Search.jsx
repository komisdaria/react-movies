import React, { useState } from "react";

const Search = ({ searchMovies }) => {

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  // const handleSearch = (event) => {
  //   setSearch(event.target.value);
  //   console.log(event.target.value);
  // };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    event.preventDefault();
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);

    // if (event.target.checked) {
    //   console.log(event.target.value);
    //   setType(event.target.value);
    //   searchMovies(search, type)
    // }

  };

  return (
    <div className="row">
      <div className="input-field "> 
        <input
          className="validate"
          placeholder="search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn search-btn yellow darken-3"
          onClick={() => searchMovies(search, type)}
        >
          Search
        </button>
        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              value='all'
              onChange={handleFilter}
              checked={type === 'all'}
            />
            <span>All categories</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              value="movie"
              onChange={handleFilter}
              checked={type === 'movie' }
            />
            <span>Movies only</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="series"
              data-type="series"
              onChange={handleFilter}
              // checked={type === 'series' ? true : false } по умолчанию выдает тру или фолс
              checked={type === 'series'}

            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Search;
