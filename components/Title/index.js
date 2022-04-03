import styles from "./style.module.css";
import cn from "classnames";
import Filter from "components/Filter";


const Title = ({ titlesList }) => {
  return (
    <section className={styles.title}>
      {titlesList.map((item) => {
        return (
          <h2 className={styles.titleItem} key={item.id}>
            {item.title}
          </h2>
        );
      })}
      <Filter />
    </section>
  );
};

export default Title;
