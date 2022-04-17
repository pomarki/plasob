import { Title, DateBar } from "../index";
import styles from "./style.module.css";

const PlanHeader = ({ titlesList, year, month, holidays, fullMonth }) => {
  return (
    <section className={styles.PlanHeader}>
      <Title titlesList={titlesList[0]} type={"xl"} />
      <DateBar
        year={year}
        month={month}
        holidays={holidays}
        fullMonth={fullMonth}
      />
      <Title titlesList={titlesList[1]} type={"s"} />
    </section>
  );
};

export default PlanHeader;
