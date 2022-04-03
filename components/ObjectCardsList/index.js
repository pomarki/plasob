import styles from "./style.module.css";
import { DateBar, Filter, ObjectCard, Title } from "../index";

const ObjectCardsList = ({ list, month, titlesList }) => {
  return (
    <section className={styles.cardListContainer}>
      <div>
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
    </section>
  );
};

export default ObjectCardsList;
