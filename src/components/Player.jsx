// Import React libraries
import {useParams} from "react-router-dom";

function Player({imageUrl, name, breed, status}) {
  const {id} = useParams();

  return (
    <>
      <h2>single player component</h2>
    </>
  )
};

export default Player