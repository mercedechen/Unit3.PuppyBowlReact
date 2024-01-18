import {NavLink} from 'react-router-dom';

function NavBar(){

  return (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/players'>Players</NavLink>
      <NavLink to='/players/:id'>Player Details</NavLink>
    </>
  );
};

export default NavBar;