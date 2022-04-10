import styles from "./style.module.css";
import cn from "classnames";

const CalendarDay = ({ date }) => {
  return (
    <div className={styles.calendarDay}>
      <p className={styles.calendarDayItem}>пн</p>
      <p className={styles.calendarDayItem}>{date}</p>
    </div>
  );
};

export default CalendarDay;
