import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <NavLink to="/pets">Find Your Lost Pet</NavLink>
      </h1>
    </nav>
  );
}
