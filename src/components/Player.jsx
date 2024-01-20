// Import React libraries
import {useParams} from "react-router-dom";

function Player({imageUrl, name, breed, status}) {
  const {id} = useParams();

  return (
    <>
      <h2>single player component</h2>
      <img src={imageUrl} alt={imageUrl}/>
      <h4>{name}</h4>
      <p>{breed}</p>
      <p>{status}</p>
    </>
  )
};

export default Player