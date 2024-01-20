import {useState} from 'react'

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF-B-mercede";

function NewPlayerForm() {

  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [status, setStatus] = useState('bench');
  const [imageUrl, setImageUrl] = useState('');

  async function handleSubmit(event) {
    // Stops the page from reloading
    event.preventDefault();
    const response = await fetch(`${API_URL}/players`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        breed,
        status,
        imageUrl
      })
    })

    // Changes state variable to null or empty
    setName('');
    setBreed('');
    setImageUrl('');
  }

  return (
    <>
      <form className="player-form" onSubmit={handleSubmit}>
        <h2>Registration</h2>
        {/* Update setName with the input text */}
        <label>Name
          <input type='text' value={name} onChange={event => setName(event.target.value)}/>
        </label>

        {/* Update setBreed with the input text */}
        <label>Breed
          <input type='text' value={breed} onChange={event => setBreed(event.target.value)}/>
        </label>

        {/* Update setStatus with the selected option */}
        <label>Status
          <select id="status" onChange={event => setStatus(event.target.value)}>
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label>   

        {/* Update setImageUrl with the input text */}
        <label>Image Url
          <input type='text' value={imageUrl} onChange={event => setImageUrl(event.target.value)}/>
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </>
  )
}

export default NewPlayerForm