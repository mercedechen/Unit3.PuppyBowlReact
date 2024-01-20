// Import root source files
import './App.css'

// Import React libraries
import {Routes, Route} from 'react-router-dom'

// Import components
import NewPlayerForm from './components/NewPlayerForm.jsx';
import Players from './components/Players.jsx';
import Player from './components/Player.jsx';

function App(){
  return (
    <>
      <h1>Puppy Bowl React</h1>

      <div className="content">
        <NewPlayerForm />
        <Routes>
          <Route path='/' element={<Players/>} />
          <Route path='/players/:id' element={<Player />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
