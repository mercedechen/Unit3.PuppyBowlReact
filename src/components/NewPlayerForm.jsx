function NewPlayerForm() {

  return (
    <>
      <form>
        <label for='playerName'>Name: </label>
        <input id='playerName'></input>
        <label for='playerBreed'>Breed: </label>
        <input id='playerBreed'></input>
        <label for='playerStatus'>Status: </label>
        <input id='playerStatus'></input>
        <label for='playerImg'>Image URL: </label>
        <input id='playerImg'></input>
        <button>Submit</button>
      </form>
    </>
  )
}

export default NewPlayerForm