import { DateBar, ObjectCardsList, PlanHeader, Title } from "../index";

import styles from "./style.module.css";

const Plan = ({ list, month, year, holidays, titlesList, fullMonth }) => {
  return (
    <section className={styles.plan}>
      <PlanHeader
        titlesList={titlesList}
        year={year}
        month={month}
        holidays={holidays}
        fullMonth={fullMonth}
      />
      <div className={styles.planItem}>
        <ObjectCardsList
          list={list}
          month={month}
          titlesList={titlesList}
          fullMonth={fullMonth}
        />
      </div>
    </section>
  );
};

export default Plan;
