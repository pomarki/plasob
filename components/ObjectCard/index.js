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
  const [startDay, setStartDay] = useState(false);
  const [expirationDay, setExpirationDay] = useState(false);
  const [workDays, setWorkDays] = useState({ start: 0, finish: 0 });

  function chooseWorkingDate(choosenDay) {
    let durationWork = workDays.finish - workDays.start + 1;
    let workObj = { start: 0, finish: 0 };

    function workDayToggle() {
      if (choosenDay < workDays.start) {
        workObj = { start: choosenDay, finish: workDays.finish };

        setWorkDays(workObj);
      } else {
        workObj = { start: workDays.start, finish: choosenDay };
        setWorkDays(workObj);
      }
    }

    if (workDays.start === 0) {
      workObj = { start: choosenDay, finish: choosenDay };
      setWorkDays(workObj);
      return;
    }

    if (durationWork === 1) {
      if (choosenDay === workDays.start) {
        workObj = { start: 0, finish: 0 };
        setWorkDays(workObj);
        return;
      } else {
        workDayToggle();
        return;
      }
    }

    if (durationWork > 1) {
      workDayToggle();
      return;
    }
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
            team={"v"}
          />
        </div>
      </div>
    </>
  );
};

export default ObjectCard;
