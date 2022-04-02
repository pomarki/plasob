import styles from "./style.module.css";
import cn from "classnames";

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
     
    </section>
  );
};

export default Title;
