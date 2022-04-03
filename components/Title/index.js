import styles from "./style.module.css";
import cn from "classnames";
import Filter from "components/Filter";


const Title = ({ titlesList, type }) => {
  
  const titleType = "title_" + type;

  return (
    <section className={cn(styles.title, styles[titleType])}>
      {titlesList.map((item) => {
        return (
          <h2 className={styles.titleItem} key={item.id}>
            {item.title}
          </h2>
        );
      })}
      <Filter type={type} />
    </section>
  );
};

export default Title;
