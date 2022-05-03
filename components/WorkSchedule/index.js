import WorkDay from "../WorkDay";
import actualYear from "configs/configs";
import styles from "./style.module.css";
import cn from "classnames";

const WorkSchedule = ({
  month,
  workDays,
  nonWorkingDays,
  fullMonth,
  onDayClick,
}) => {
  const selectActiveDay = () => {};

  return (
    <div className={styles.WorkSchedule}>
      {fullMonth.map((date) => {
        return (
          <WorkDay
            key={date.id}
            id={date.id}
            date={date.date}
            isHoliday={date.holiday}
            onDayClick={onDayClick}
          />
        );
      })}
    </div>
  );
};

export default WorkSchedule;
