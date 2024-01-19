// Import React libraries
import {NavLink} from 'react-router-dom';

function Navigation(){
  return (
    <nav>
      <h1>Puppy Bowl React</h1>
      <NavLink to='/players'>Players</NavLink>
      <NavLink to='/players/:id'>Player Details</NavLink>
    </nav>
  );
};

export default Navigation;