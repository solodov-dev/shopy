import { Link } from "react-router-dom";
import menu from "../constants/routes";
import styles from "../styles/mainMenu.module.css";

export default function MainMenu() {
  return (
    <nav className={styles.menu}>
      <ul>
        {Object.entries(menu).map(([title, value]) => (
          <li key={value.path}>
            <Link to={value.path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
