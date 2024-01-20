// import React libraries
import {useState, useEffect} from 'react';

// API
const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF-B-mercede";

function SearchPlayer() {

  return (
    <div className="player-search">
      <form>
        <label>Search:
          <input type="text" placeholder="Search for a player..." />
        </label>
      </form>
    </div>
  )
}

export default SearchPlayer