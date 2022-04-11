import styles from "./style.module.css";
import cn from "classnames";
import { useState } from "react";

const WorkDay = ({ date, isHoliday }) => {
  const [isActiveDay, setActiveDay] = useState(false);
  let containerStyle;
  let activeStyle;
  let attentionStyle;
  

  const onDayClick = () => {
    setActiveDay(!isActiveDay);
    
  };

  isHoliday
    ? (containerStyle = cn(styles.workDay, styles.workDay_holiday))
    : (containerStyle = styles.workDay);

  isActiveDay ? (activeStyle = styles.workDay_active) : (activeStyle = "");

  isHoliday && isActiveDay
    ? (attentionStyle = styles.workDay_attention)
    : (attentionStyle = "");

  return (
    <div
      className={cn(containerStyle, activeStyle, attentionStyle)}
      onClick={onDayClick}
    >
      <p className={styles.workDay__title}>{isActiveDay ? "V" : ""}</p>
    </div>
  );
};

export default WorkDay;
