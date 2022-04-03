import WorkDay from "../WorkDay";
import actualYear from "configs/configs";
import styles from "./style.module.css";
import cn from "classnames";

const WorkSchedule = ({ month, workDays, nonWorkingDays }) => {
  const date = new Date(`${actualYear}-${month}-1`);

  return (
    <div className={styles.WorkSchedule}>
      <WorkDay isHoliday={false} />
      1234567
    </div>
  );
};

export default WorkSchedule;
