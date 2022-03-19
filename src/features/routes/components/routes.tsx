import { Link } from "react-router-dom";
import menu from "../constants/routes";
import styles from "../styles/menu.module.css";

export default function MainMenu() {
  return (
    <nav className={styles.menu}>
      <ul>
        {menu.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
