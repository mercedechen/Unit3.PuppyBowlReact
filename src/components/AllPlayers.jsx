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
      {Array.isArray(players) && players.length > 0 ? (
        players.map((player, id) => (
          <ul key={id} className="card">
            <li><img src={player.imageUrl}></img></li>
            <li>{player.name}</li>
            <li>{player.breed}</li>
            <li>{player.status}</li>
          </ul>
        ))
      ) : (
        <p>No player data available</p>
      )}
    </>
  )
}

// import { useGetPlayersQuery, useDeletePlayerMutation } from "../redux/api.js";

// function AllPlayers(){
//   const { data, error, loading } = useGetPlayersQuery();

//   const [ deletePlayer ] = useDeletePlayerMutation();

//   function handleDelete(player) {
//     deletePlayer(player.id)
//   }

//   return (
//     <>
//       <h2>all players component</h2>
//       <div>
//         {error ? <div>Error</div> : <div></div>}
//         {loading ? <div>Loading</div> :
//         <ul>
//           {data?.data.players.map((player)=> {
//             return (
//               <li className="card" key={player.id}>
//                 <p><strong>Name: </strong>{player.name}</p>
//                 <p><strong>Breed: </strong>{player.breed}</p>
//                 <p><strong>Status: </strong>{player.status}</p>
//                 <p><strong>Image: </strong>{player.image}</p>
//                 <button onClick={() => handleDelete(player)}>Delete</button>
//               </li>
//             )
//           })}
//         </ul>
//         }
//       </div>
//     </>
//   )
// }

export default AllPlayers;