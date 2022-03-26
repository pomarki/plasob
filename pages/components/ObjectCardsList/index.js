import styles from "./style.module.css";
import { ObjectCard } from "../index";

const ObjectCardsList = ({ list, month }) => {
  return (
    <div className={styles.cardListContainer}>
      <div>
        <h2 className={styles.cardListTitle}>title</h2>
      </div>
      {list.map((item) => {
        return (
          <ObjectCard
            key={item.id}
            id={item.id}
            obj={item.obj}
            branch={item.branch}
            town={item.town}
            address={item.address}
            phone={item.phone}
            mode={item.mode}
            month={month}
          />
        );
      })}
    </div>
  );
};

export default ObjectCardsList;
