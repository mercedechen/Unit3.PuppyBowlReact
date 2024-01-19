import { useGetPlayersQuery, useDeletePlayerMutation } from "../redux/api.js";

function AllPlayers(){
  const { data, error, loading } = useGetPlayersQuery();

  const [ deletePlayer ] = useDeletePlayerMutation();

  function handleDelete(player) {
    deletePlayer(player.id)
  }

  return (
    <>
      <h2>all players component</h2>
      <div>
        {error ? <div>Error</div> : <div></div>}
        {loading ? <div>Loading</div> :
        <ul>
          {data?.data.players.map((player)=> {
            return (
              <li className="card" key={player.id}>
                <p><strong>Name: </strong>{player.name}</p>
                <p><strong>Breed: </strong>{player.breed}</p>
                <p><strong>Status: </strong>{player.status}</p>
                <p><strong>Image: </strong>{player.image}</p>
                <button onClick={() => handleDelete(player)}>Delete</button>
              </li>
            )
          })}
        </ul>
        }
      </div>
    </>
  )
}

export default AllPlayers;