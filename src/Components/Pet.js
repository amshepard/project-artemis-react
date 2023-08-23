import { Link } from "react-router-dom";

function Pet({ pet, id }) {
  return (
    <tr className="Pet">
      <td>
        <Link to={`/pets/${id}`}>{pet.name}</Link>
      </td>
      <td>
        <Link to={`/pets/${id}`}>{pet.breed}</Link>
      </td>
      <td>
        <Link to={`/pets/${id}`}>{pet.type}</Link>
      </td>
      <td>
        <Link to={`/pets/${id}`}>{pet.city}</Link>
      </td>
      <td>
        <Link to={`/pets/${id}`}>{pet.found_date}</Link>
      </td>
    </tr>
  );
}

export default Pet;