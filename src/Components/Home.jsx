import React from "react";
import "./Movies.css";

function Home() {
  return (
    <div className="main-container">
      <nav>
        <h1>
          Khali<span>FA</span>
        </h1>
        <p>What do you want to watch? Search for it!</p>
      </nav>
      <div className="search-area">
        <input type="search" placeholder="Search for a movie here" />
        <button>Search</button>
        <button>Add to Favorites</button>
        <button>Random Movie</button>
      </div>
    </div>
  );
}

export default Home;
