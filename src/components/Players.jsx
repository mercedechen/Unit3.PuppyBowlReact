// import React libraries
import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

// import source files
import NewPlayerForm from './NewPlayerForm.jsx';

// API
const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF-B-mercede";

// fetch player data from API
function Players() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const response = await fetch(`${API_URL}/players`);
        const json = await response.json();
        // console.log(json.data.players);
        setPlayers(json.data.players);
      } catch (error) {
        console.error('Error fetching player data: ', error);
      }
    }
    getPlayers();
  }, []);

  return (
    <div className='player-container'>
      <div className="player-cards">
        {
          players.length ?
          players.map((player, id) => {
            return (
              <div key={id} className="player-card">
                <h4>{player.name}</h4>
                <img src={player.imageUrl} alt={player.imageUrl}/>
                <button onClick={() => {navigate(`/players/${player.id}`)}}>Player Details</button>
                <button>Remove</button>
              </div>
            )
          }) : <h4>Loading...</h4>
        }
      </div>
      
      <NewPlayerForm />
    </div>    
  );
};

export default Players;