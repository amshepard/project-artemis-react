import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <NavLink to="/songs">The Artemis Project</NavLink>
      </h1>
    </nav>
  );
}
