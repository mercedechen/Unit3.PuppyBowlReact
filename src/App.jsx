// import React libraries
import {Routes, Route} from 'react-router-dom'

// import source files
import './App.css'
import Players from './components/Players.jsx';
import Player from './components/Player.jsx';

function App(){
  return (
    <>
      <h1>Puppy Bowl React</h1>
      <div className="content">
        <Routes>
          {/* Elements are what we want to show on the specific route path */}
          <Route path='/' element={<Players />} />
          <Route path='/players/:id' element={<Player />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
