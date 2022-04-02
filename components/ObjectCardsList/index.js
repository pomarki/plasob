import styles from "./style.module.css";
import { Filter, ObjectCard, Title } from "../index";

const ObjectCardsList = ({ list, month, titlesList }) => {
  return (
    <div className={styles.cardListContainer}>
      <Title titlesList={titlesList} />
      <Filter />
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
