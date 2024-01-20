// Import React libraries
import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF-B-mercede";

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
    <>
      <div className='container'>
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
          }) : <h2>Loading...</h2>
        }
      </div>    
    </>
  );
};

export default Players;