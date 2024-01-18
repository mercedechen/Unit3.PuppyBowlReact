import {useState} from 'react';

function AllPlayers(){

  const [players, setPlayers] = useState([]);

  

  return (
    <>
      <h2>This is the all players component</h2>
      <div>{players}</div>
    </>
  )
};

export default AllPlayers;