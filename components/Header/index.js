import styles from "./style.module.css";
import cn from "classnames";
const Header = ({ year }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>html from header: {year}</h1>
    </header>
  );
};

export default Header;
