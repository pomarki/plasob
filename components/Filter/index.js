import styles from "./style.module.css";
import cn from "classnames";

const Filter = ({ type }) => {
  return <section className={styles.filter}>
    <div className={styles.filterItem}></div>
    <div className={styles.filterItem}></div>
    <div className={styles.filterItem}></div>
    <div className={styles.filterItem}>4</div>
    <div className={styles.filterItem}></div>
  </section>;
};
export default Filter;
