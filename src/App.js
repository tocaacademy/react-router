import 'bootstrap/dist/css/bootstrap.css';
import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    <div>
    <h1>CHARACTERS AND EPISODES</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/characters">Characters</Link> |{" "}
      <Link to="/episodes">Episodes</Link>
    </nav>

    <Outlet/>
  </div>
   
  );
}

export default App;
