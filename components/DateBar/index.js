/* getDay() */

import styles from "./style.module.css";
import cn from "classnames";

const DateBar = ({ month }) => {
  return <div className={styles.dateBar}>

<div className={styles.dateBarWeek}>1</div>
<div className={styles.dateBarDates}>2</div>

  </div>;
};

export default DateBar;
