import Pets from "../Components/Pets";
import { NavLink } from "react-router-dom";

function Index() {
  return (
    <>
      <div className="Index">
        <h2>Index</h2>
        <button>
          <NavLink to="/pets/new">New Pet</NavLink>
        </button>
      </div>
      <Pets />
    </>
  );
}

export default Index;
