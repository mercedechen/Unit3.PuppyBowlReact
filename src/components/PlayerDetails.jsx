// Import React libraries
import {useParams} from "react-router-dom";

// Import player data
import players from './Players.jsx';

function PlayerDetails() {
  const {playerId} = useParams();

  // const player = players.find((player) => player.id === parseInt(playerId));

  return (
    <>
      <h2>single player component</h2>
    </>
  )
};

export default PlayerDetails;