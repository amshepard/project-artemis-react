import { Link } from "react-router-dom";


export default function NavSidebar() {
  return (
    <nav>
      <Link to="/pets/new">Report A Pet</Link>
    </nav>
  );
}
