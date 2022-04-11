import styles from "./style.module.css";
import cn from "classnames";

const CalendarDay = ({ date, weekDay, holiday }) => {
  let containerStyle;
  
  holiday
    ? (containerStyle = cn(styles.calendarDay, styles.calendarDay_holiday))
    : (containerStyle = styles.calendarDay);

  return (
    <div className={containerStyle}>
      <p className={styles.calendarDayItem}>{weekDay}</p>
      <p className={styles.calendarDayItem}>{date}</p>
    </div>
  );
};

export default CalendarDay;
