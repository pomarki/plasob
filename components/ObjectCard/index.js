import styles from "./style.module.css";
import cn from "classnames";
import { useState } from "react";
import { Button } from "../ui";
import { ObjectCardTotal, WorkSchedule, ObjectInfo } from "../index";

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
  const [workDays, setWorkDays] = useState({ start: 0, finish: 0 });

  function chooseWorkingDate(choosenDay) {
    let durationWork = workDays.finish - workDays.start + 1;
    let workObj = { start: 0, finish: 0 };
    let isActive = fullMonth[choosenDay - 1].isActive;

    
  }

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
       {/*  <ObjectInfo /> */}
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
        className={cn(styles.cardItem, styles.cardItem__info, cardItemVisible)}
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
        className={cn(styles.cardItem, styles.cardItem__info, cardItemVisible)}
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
        className={cn(styles.cardItem, styles.cardItem__info, cardItemVisible)}
      >
        {mode}
      </p>
        <div className={styles.cardWorkSchedule}>
          <WorkSchedule
            month={"1"}
            fullMonth={fullMonth}
            onDayClick={chooseWorkingDate}
          />
        </div>
        <div className={styles.cardTotal}>
          <ObjectCardTotal
            start={workDays.start}
            end={workDays.finish}
            team={"V"}
          />
        </div>
      </div>
    </>
  );
};

export default ObjectCard;
