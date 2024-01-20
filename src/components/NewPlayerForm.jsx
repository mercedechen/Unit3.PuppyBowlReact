import {useState} from 'react'

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF-B-mercede";

function NewPlayerForm() {

  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
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
        imageUrl
      })
    })
    // const json = await response.json();
    // console.log(json);

    // Changes state variable to null or empty
    setName('');
    setBreed('');
    setImageUrl('');
  }

  return (
    <>
      <h4>Registration</h4>
      <form className="player-form" onSubmit={handleSubmit}>
        {/* Update setName with the input text, clears value after submit */}
        <label>Name</label>
        <input type='text' value={name} onChange={event => setName(event.target.value)}/>

        {/* Update setName with the input text, clears value after submit */}
        <label>Breed</label>
        <input type='text' value={breed} onChange={event => setBreed(event.target.value)}/>

        {/* Update setName with the input text, clears value after submit */}
        <label>Image Url</label>
        <input type='text' value={imageUrl} onChange={event => setImageUrl(event.target.value)}/>

        <button type="submit">Sign Up</button>
      </form>
    </>
  )
}

export default NewPlayerForm