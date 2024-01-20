import {useState} from 'react'

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF-B-mercede";

function NewPlayerForm() {

  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  async function handleSubmit(event) {
    // Stops the page from reloading
    event.preventDefault();
    let response = await fetch(`${API_URL}/players`, {
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
    let json = await response.json();
    console.log(json);
  }

  return (
    <>
      <h4>Registration</h4>
      <form method="post" className="player-form" onSubmit={handleSubmit}>
        {/* Update setName with the input text */}
        <label>Name</label>
        <input type='text' onChange={event => setName(event.target.value)}/>

        {/* Update setBreed with the input text */}
        <label>Breed</label>
        <input type='text' onChange={event => setBreed(event.target.value)}/>

        {/* Update setImageUrl with the input text */}
        <label>Image Url</label>
        <input type='text' onChange={event => setImageUrl(event.target.value)}/>

        <button type="submit">Sign Up</button>
      </form>
    </>
  )
}

export default NewPlayerForm