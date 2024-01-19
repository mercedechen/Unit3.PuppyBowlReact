// Import React libraries
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF-B-mercede/players"

function Players() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        console.log(json.data);
        setPlayers(json.data.players);
      } catch (error) {
        console.log(error);
      }
    }
    getPlayers();
  }, []);

  return (
    <>
      <div className='card'>
        {
          players.map((player, id) => {
            return (
              <div key={id} className="player-card">
                <img src={player.imageUrl} alt={player.imageUrl}/>
                <button onClick={() => {navigate(`/players/${player.id}`)}}>Player Details</button>
                <h4>{player.name}</h4>
                <p>{player.breed}</p>
                <p>{player.status}</p>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default Players;