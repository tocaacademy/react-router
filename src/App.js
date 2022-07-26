import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, Outlet } from "react-router-dom";

const getStyleForActive=({ isActive }) => {
  
  if(isActive){
    return {
      color: isActive ? "white" : "",
      fontSize: "1.5rem",
      padding:10,
      background:"black",
      borderRadius:15
  
    };
  }
  
}

function App() {

  return (
    <div className='container'>
    <h1>CHARACTERS AND EPISODES</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
        
      }}
    >
      <NavLink to="/"
                style={getStyleForActive}
      >
          Home
      </NavLink> |{" "}
      <NavLink to="/characters"
              style={getStyleForActive}>
                Characters
      </NavLink> |{" "}
      <NavLink to="/episodes"
      style={getStyleForActive}>
        Episodes
      </NavLink>
    </nav>

    <Outlet/>
  </div>
   
  );
}

export default App;
