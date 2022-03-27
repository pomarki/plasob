import WorkDay from "../WorkDay";
import actualYear from "configs/configs";

const WorkSchedule = ({ month, workDays, nonWorkingDays }) => {
    const date = new Date(`${actualYear}-${month}-1`);
    /* let monthLength = getMonth(date); */

    console.log(date)

  return (
    <div>

      <WorkDay isHoliday={false} />
    </div>
  );
};

export default WorkSchedule;
