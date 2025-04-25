import { Link } from "react-router-dom";
import "./nav.css"

function Nav() {
  return (
    <>
      <nav className="navBar">
        <ul className="navLista">
          <li className="navItem"><Link to="/" className="navLink">Home</Link></li>
          <li className="navItem"><Link to="/erva1" className="navLink">Erva 1</Link></li>
          <li className="navItem"><Link to="/erva2" className="navLink">Erva 2</Link></li>
          <li className="navItem"><Link to="/erva3" className="navLink">Erva 3</Link></li>
          <li className="navItem"><Link to="/erva4" className="navLink">Erva 4</Link></li>
          <li className="navItem"><Link to="/erva5" className="navLink">Erva 5</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;