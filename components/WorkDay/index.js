import styles from "./style.module.css";
import cn from "classnames";
import { useState } from "react";

const WorkDay = ({ date, isHoliday }) => {
  const [isActiveDay, setActiveDay] = useState(false);

  const onDayClick = () => {
    setActiveDay(!isActiveDay);
  };

  let containerStyle;
  let activeStyle;
  isHoliday
    ? (containerStyle = cn(styles.workDay, styles.workDay_holiday))
    : (containerStyle = styles.workDay);
  isActiveDay ? (activeStyle = styles.workDay_active) : (activeStyle = "");

  return (
    <div className={cn(containerStyle, activeStyle)} onClick={onDayClick}>
      <p>{date}</p>
    </div>
  );
};

export default WorkDay;
