/* getDay() */

import styles from "./style.module.css";
import cn from "classnames";
import CalendarDay from "components/CalendarDay";

const DateBar = ({ year, month, holidays }) => {


  // year = 2020 month = 1
  // monthDuration - длина месяца беру из массива, 28 и 29 февраля вычисляю функцией checkLeapYear

  return (
    <div className={styles.dateBar}>

      <CalendarDay date={"01"} />
    
    </div>
  );
};

export default DateBar;

//
