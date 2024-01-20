// import React libraries
import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

// API
const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF-B-mercede";

function Player() {
  
  const [player, setPlayer] = useState({});

  // Params data gives back an object with player {id}. Object destructuring will give back the id value
  const {id} = useParams()

  useEffect(() => {
    getPlayer()
  }, []);

  async function getPlayer() {
    try {
      const response = await fetch(`${API_URL}/players/${id}`);
      const json = await response.json();
      // console.log(json.data.player);
      setPlayer(json.data.player);
    } catch (error) {
      console.error('Error getting player details: ', error);
    };
  };

  return (
    <div className="player-profile">
      <img src={player.imageUrl}/>
      <div className="player-panel">
        {
          player.id ?
          <div className="player-details">
            <p>Name: {player.name}</p>
            <p>ID: {player.id}</p>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
            <p>Team: {player.teamId}</p>
        
          </div>
          :
          <h4>Player cannot be found</h4>
        }

        <Link to='/'>Go Back</Link>
      </div>
    </div>
  )
};

export default Player