function SearchPlayer({players, setFilteredPlayers}) {


    const filterPlayers = (searchValue) => {
      if (!searchValue) {setFilteredPlayers([])} else {
      const filteredPlayers = players.filter((player) => {
        return (
          player.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      })
      setFilteredPlayers(filteredPlayers)}
    }

  return (
    <div className="player-search">
      <form>
        <label>Search:
          <input type="text" placeholder="Search for a player..." onChange={(event) => filterPlayers(event.target.value)}/>
        </label>
      </form>
    </div>
  )
}

export default SearchPlayer