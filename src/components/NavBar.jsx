import {NavLink} from 'react-router-dom'

function NavBar() {

  return (
    <>
      <h2>This is the navbar</h2>
      <NavLink to='/'>To Home</NavLink>
      <NavLink to='/players'>Players</NavLink>
    </>
  )
}

export default NavBar