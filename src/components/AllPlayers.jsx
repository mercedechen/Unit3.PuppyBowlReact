// react
import {useState, useEffect} from 'react';

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF-B-mercede/players"

function AllPlayers() {
  const [players, setPlayers] = useState([]);

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
      {
        players.map((player, id) => {
          return (
            <div key={id} className="card">
              <h4>{player.name}</h4>
              <p>{player.breed}</p>
              <p>{player.status}</p>
              <img src={player.imageUrl} alt={player.imageUrl}/>
            </div>
          )
        })
      }
    </>
  );
};

export default AllPlayers;