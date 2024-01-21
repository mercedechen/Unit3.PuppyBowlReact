// import React libraries
import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

// import source files
import NewPlayerForm from './NewPlayerForm.jsx';
import SearchPlayer from './SearchPlayer.jsx';

// API
const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF-B-mercede";

// fetch player data from API
function Players() {
  
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const response = await fetch(`${API_URL}/players`);
        const json = await response.json();
        setPlayers(json.data.players);
      } catch (error) {
        console.error('Error fetching player data: ', error);
      }
    }
    getPlayers();
  }, [players]);

  const removePlayer = async (id) => {
    try {
      const response = await fetch(`${API_URL}/players/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        console.error('Error removing player');
      }

    } catch (error) {
      console.error('Error encountered, player was not removed: ', error);
    }
  }

  return (
    <div className='container'>
      <div className="players">
        {
          players.length ? 
          (filteredPlayers.length) ?
          filteredPlayers.map((player, id) => {
            return (
              <div key={id} className="player-card">
                <h4>{player.name}</h4>
                <img src={player.imageUrl} alt={player.imageUrl}/>
                <button onClick={() => {navigate(`/players/${player.id}`)}}>Details</button>
                <button onClick={() => removePlayer(player.id)}>Remove</button>
              </div>
            )}) :
          players.map((player, id) => {
            return (
              <div key={id} className="player-card">
                <h4>{player.name}</h4>
                <img src={player.imageUrl} alt={player.imageUrl}/>
                <button onClick={() => {navigate(`/players/${player.id}`)}}>Details</button>
                <button onClick={() => removePlayer(player.id)}>Remove</button>
              </div>
            )
          }) : <h4>Loading...</h4>
        }
      </div>

      <div>
        <SearchPlayer players={players} setFilteredPlayers={setFilteredPlayers} />
        <NewPlayerForm />
      </div>
    </div>    
  );
};

export default Players;