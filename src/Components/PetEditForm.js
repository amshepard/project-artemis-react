import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PetEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [pet, setPet] = useState({
    name: "",
    type: "",
    breed: "",
    city: "",
    found_date: "",
  });

  const handleTextChange = (event) => {
    setPet({ ...pet, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/pets/${id}`)
      .then(
        (response) => {
          setPet(response.data);
        },
        (err) => {
          console.error(err);
          navigate(`/not-found`);
        }
      )
      .catch((c) => console.warn("catch", c));
  }, [id, API]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePet(pet);
  };

  const updatePet = (updatedPet) => {
    axios
      .put(`${API}/pets/${id}`, updatedPet)
      .then(
        () => {
          navigate(`/pets/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Pet Name:</label>
        <input
          id="name"
          value={pet.name}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="type">Type</label>
        <input
          id="type"
          type="text"
          value={pet.type}
          onChange={handleTextChange}
        />
        <label htmlFor="breed">Breed</label>
        <input
          type="text"
          id="breed"
          name="breed"
          value={pet.breed}
          onChange={handleTextChange}
          placeholder=""
        />
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          name="city"
          value={pet.city}
          onChange={handleTextChange}
        />
        <label htmlFor="found_date">Found Date</label>
        <input
          id="found_date"
          type="text"
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

export default PetEditForm;
