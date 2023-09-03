import { Link } from "react-router-dom";


export default function Aside() {
  return (
    <aside>
      <Link to="/pets/pet_id">View All Pets</Link>
    </aside>
  );
}

