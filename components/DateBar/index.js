import styles from "./style.module.css";
import cn from "classnames";
import CalendarDay from "components/CalendarDay";
import weekDays from "configs/week";

const DateBar = ({ year, month, holidays, fullMonth }) => {
  return (
    <div className={styles.dateBar}>
      {fullMonth.map((dateItem) => {
        return (
          <CalendarDay
            key={dateItem.id}
            date={dateItem.date}
            weekDay={weekDays[dateItem.weekDay]}
            holiday={dateItem.holiday}
          />
        );
      })}
    </div>
  );
};

export default DateBar;

//
