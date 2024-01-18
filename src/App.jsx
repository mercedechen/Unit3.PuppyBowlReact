import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import AllPlayers from './components/AllPlayers.jsx'
import SinglePlayer from './components/SinglePlayer.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />} />
        <Route path='/players' element={<AllPlayers />} />
        <Route path='/players/:id' element={<SinglePlayer />} />
      </Routes>
    </>
  )
}

export default App
