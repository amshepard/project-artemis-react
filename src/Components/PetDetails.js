import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function PetDetails() {
  const [pet, setPet] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const deletePet = () => {
    axios
      .delete(`${API}/pets/${id}`)
      .then(
        () => navigate(`/pets`),
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    axios
      .get(`${API}/pets/${id}`)
      .then((response) => {
        setPet(response.data);
      })
      .catch((c) => {
        console.warn("catch", c);
        navigate("/not-found");
      });
  }, [id, navigate, API]);

  return (
    <>
      <article className="container Pet-Details">
        <h5>{pet.breed}</h5>
        <h6>
          <span>Type: </span>
          {pet.type}
        </h6>
        <h6>
          <span>City: </span>
          {pet.city}
        </h6>
      </article>
      <div className="showNavigation">
        <div>
          <button>
            <Link to={`/pets`}>Back</Link>
          </button>
        </div>

        <div>
          <button>
            <Link to={`/pets/${id}/edit`}>Edit</Link>
          </button>
        </div>
        <div>
          <button onClick={deletePet}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default PetDetails;
