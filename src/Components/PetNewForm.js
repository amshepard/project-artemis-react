import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function PetNewForm(props) {
  let navigate = useNavigate();
  const [submitError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [pet, setPet] = useState({
    name: "",
    type: "",
    breed: "",
    city: "",
    found_date: "",
  });

  const addPet = (newPet) => {
    axios
      .post(`${API}/pets`, newPet)
      .then(
        (response) => {
          navigate(`/pets`);
          setError(false);
        },
        (error) => {
          console.error(error);
          setError(true);
          setErrorMessage(error);
        }
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setPet({ ...pet, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPet(pet);
  };

  return (
    <div className="New">
      {submitError ? <h2>There was an error : {errorMessage.Error}</h2> : null}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Pet Name:</label>
        <input
          id="name"
          value={pet.name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="type">Type</label>
        <input
          id="type"
          type="text"
          value={pet.type}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="breed">Breed</label>
        <input
          type="text"
          id="breed"
          name="breed"
          value={pet.breed}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          name="city"
          value={pet.city}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="found_date">Found Date</label>
        <input
          id="found_date"
          type="date"
          name="found_date"
          value={pet.found_date}
          onChange={handleTextChange}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default PetNewForm;
