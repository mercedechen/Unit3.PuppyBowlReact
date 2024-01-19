// root files
import './App.css'

// react
import {Routes, Route} from 'react-router-dom'

// components
import Home from './components/Home.jsx';
import NavBar from './components/NavBar.jsx';
import AllPlayers from './components/AllPlayers.jsx';
import SinglePlayer from './components/SinglePlayer.jsx';

function App(){

  return (
    <>
      <nav>
        <h1>Puppy Bowl React</h1>
        <NavBar />
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/players' element={<AllPlayers />} />
        <Route path='/players/:id' element={<SinglePlayer />} />
      </Routes>
    </>
  )
}

export default App;
