// Import root source files
import './App.css'

// Import React libraries
import {Routes, Route} from 'react-router-dom'

// Import components
import Navigation from './components/Navigation.jsx';
import NewPlayerForm from './components/NewPlayerForm.jsx';
import Players from './components/Players.jsx';
import Player from './components/Player.jsx';

function App(){
  return (
    <>
      <Navigation />
      <NewPlayerForm />
      
      <Routes>
        <Route path='/players' element={<Players />} />
        <Route path='/players/:id' element={<Player />} />
      </Routes>
    </>
  )
}

export default App;
