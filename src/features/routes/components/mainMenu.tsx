import { Link } from "react-router-dom";
import Routes from "../constants/routes";
import styles from "../styles/mainMenu.module.scss";

const menu = {
  [Routes.HOME]: "home",
  [Routes.HISTORY]: "history",
  [Routes.CART]: "cart",
};

export default function MainMenu() {
  return (
    <nav className={styles.menu}>
      <ul>
        {Object.entries(menu).map(([path, title]) => (
          <li key={path}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
