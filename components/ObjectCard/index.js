import styles from "./style.module.css";
import cn from "classnames";
import { useState } from "react";
import { Button } from "../ui";
import { ObjectCardTotal, WorkSchedule } from "../index";

const ObjectCard = ({
  id,
  obj,
  branch,
  town,
  type,
  address,
  phone,
  mode,
  month,
  fullMonth,
}) => {
  const [addressVisible, setAddressVisible] = useState(true);
  let cardItemVisible;
  addressVisible
    ? (cardItemVisible = styles.cardItem__invisible)
    : (cardItemVisible = "");

  const windowToggle = () => {
    setAddressVisible(!addressVisible);
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <p className={cn(styles.cardItem, styles.cardItem__s)}>{id}</p>
        <p className={cn(styles.cardItem, styles.cardItem__l)}>{obj}</p>
        <p className={cn(styles.cardItem, styles.cardItem__x)}>{branch}</p>
        <p className={cn(styles.cardItem, styles.cardItem__xl)}>{town}</p>
        <p className={cn(styles.cardItem, styles.cardItem__s)}>
          <Button
            size={"s"}
            icon={"ArrowDown"}
            onClick={windowToggle}
            visibility={true}
          />
        </p>
        <p
          className={cn(
            styles.cardItem,
            styles.cardItem__subtitle,
            cardItemVisible
          )}
        >
          адрес:
        </p>
        <p
          className={cn(
            styles.cardItem,
            styles.cardItem__info,
            cardItemVisible
          )}
        >
          {address}
        </p>
        <p
          className={cn(
            styles.cardItem,
            styles.cardItem__subtitle,
            cardItemVisible
          )}
        >
          телефон:
        </p>
        <p
          className={cn(
            styles.cardItem,
            styles.cardItem__info,
            cardItemVisible
          )}
        >
          {phone}
        </p>
        <p
          className={cn(
            styles.cardItem,
            styles.cardItem__subtitle,
            cardItemVisible
          )}
        >
          режим:
        </p>
        <p
          className={cn(
            styles.cardItem,
            styles.cardItem__info,
            cardItemVisible
          )}
        >
          {mode}
        </p>
        <div className={styles.cardWorkSchedule}>
          <WorkSchedule month={"1"} fullMonth={fullMonth} />
        </div>
        <div className={styles.cardTotal}><ObjectCardTotal start={"01"} end={"99"} team={"v"} /></div>
      </div>
    </>
  );
};

export default ObjectCard;
