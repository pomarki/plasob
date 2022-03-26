import styles from "./style.module.css";
import cn from "classnames";
import { useState } from "react";
import { Button } from "../ui";

const ObjectCard = ({ id, obj, branch, town, type, address, phone, mode }) => {
  const [addressVisible, setAddressVisible] = useState(false);


  const onClose = () => {
    setAddressVisible(!addressVisible);
    console.log('click!');
  }

  return (
    <>
      <div className={styles.cardContainer}>
        <p className={cn(styles.cardItem, styles.cardItem__s)}>{id}</p>
        <p className={cn(styles.cardItem, styles.cardItem__l)}>{obj}</p>
        <p className={cn(styles.cardItem, styles.cardItem__x)}>{branch}</p>
        <p className={cn(styles.cardItem, styles.cardItem__xl)}>{town}</p>
        <p className={cn(styles.cardItem, styles.cardItem__s)}>
          <Button title={"i"} size={"s"} onClick={onClose} />
        </p>
        <p className={cn(styles.cardItem, styles.cardItem__subtitle)}>адрес:</p>
        <p className={cn(styles.cardItem, styles.cardItem__info)}>{address}</p>
        <p className={cn(styles.cardItem, styles.cardItem__subtitle)}>телефон:</p>
        <p className={cn(styles.cardItem, styles.cardItem__info)}>{phone}</p>
        <p className={cn(styles.cardItem, styles.cardItem__subtitle)}>режим:</p>
        <p className={cn(styles.cardItem, styles.cardItem__info)}>{mode}</p>
        <Button title={"свернуть"} size={"xl"} />
      </div>
    </>
  );
};

export default ObjectCard;
