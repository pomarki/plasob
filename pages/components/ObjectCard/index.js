import styles from "./style.module.css";

const ObjectCard = ({ id, obj, branch, town, type, adress }) => {
  return (
    <ul className={styles.cardContainer}>
      <li className={styles.cardItem}>{id}</li>
      <li className={styles.cardItem}>{obj}</li>
      <li className={styles.cardItem}>{branch}</li>
      <li className={styles.cardItem}>{town}</li>
      {/* <li>{adress}</li> */}
    </ul>
  );
};

export default ObjectCard;
