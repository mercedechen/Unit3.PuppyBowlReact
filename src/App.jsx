// Import root source files
import './App.css'

// Import React libraries
import {Routes, Route} from 'react-router-dom'

// Import components
import Navigation from './components/Navigation.jsx';
// import NewPlayerForm from './components/NewPlayerForm.jsx';
import Players from './components/Players.jsx';
import SinglePlayer from './components/SinglePlayer.jsx';

function App(){
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/players' element={<Players />} />
        <Route path='/players/:id' element={<SinglePlayer />} />
      </Routes>
    </>
  )
}

export default App;
