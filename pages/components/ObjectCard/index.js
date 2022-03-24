import styles from "./style.module.css";
import cn from "classnames";
import { useState } from "react";


const ObjectCard = ({ id, obj, branch, town, type, address }) => {

  const [addressVisible, setAddressVisible] = useState(false);

  return (
    <ul className={styles.cardContainer}>
      <li className={cn(styles.cardItem, styles.cardItem__s)}>{id}</li>
      <li className={cn(styles.cardItem, styles.cardItem__l)}>{obj}</li>
      <li className={cn(styles.cardItem, styles.cardItem__x)}>{branch}</li>
      <li className={cn(styles.cardItem, styles.cardItem__xl)}>{town}</li>
      <li>{address}</li>
    </ul>
  );
};

export default ObjectCard;
