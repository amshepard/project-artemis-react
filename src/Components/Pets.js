import axios from "axios";
import { useState, useEffect } from "react";
import Pet from "./Pet";

const API = process.env.REACT_APP_API_URL;

function Pets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/pets`)
      .then(
        (response) => {
          setPets(response.data);
        },
        (err) => console.error(err)
      )
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div>
      <section>
        <table className="Pets">
          <thead>
            <tr>
              <th>Name</th>
              <th>Breed</th>
              <th>Type</th>
              <th>City</th>
              <th>Found Date</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => {
              return <Pet key={pet.id} pet={pet} id={pet.id} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Pets;
