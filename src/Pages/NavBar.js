import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className={style.container}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
        <li>
          <Link to="/population">Population</Link>
        </li>
        <li>
          <Link to="/weather">Weather</Link>
        </li>
        <li>
          <Link to="/temperature">Temperature</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
