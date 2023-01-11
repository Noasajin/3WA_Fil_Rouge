import {NavLink} from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/Nos-produits">
            Nos produits
          </NavLink>
        </li>
        <li>
          <NavLink to="/Nous-trouver">
            Nous trouver
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;