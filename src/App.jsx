// Import root source files
import './App.css'

// Import React libraries
import {Routes, Route} from 'react-router-dom'

// Import components
import Navigation from './components/Navigation.jsx';
// import NewPlayerForm from './components/NewPlayerForm.jsx';
import Players from './components/Players.jsx';
import PlayerDetails from './components/PlayerDetails.jsx';

function App(){
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/players' element={<Players />} />
        <Route path='/players/:id' element={<PlayerDetails />} />
      </Routes>
    </>
  )
}

export default App;
