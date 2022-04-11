import { DateBar, ObjectCardsList, Title } from "../index";

import styles from "./style.module.css";

const Plan = ({ list, month, year, holidays, titlesList, fullMonth }) => {
  return (
    <section className={styles.plan}>
      <Title titlesList={titlesList[0]} type={"xl"} />
      <DateBar
        year={year}
        month={month}
        holidays={holidays}
        fullMonth={fullMonth}
      />
      <Title titlesList={titlesList[1]} type={"s"} />
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
