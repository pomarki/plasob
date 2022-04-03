import { DateBar, ObjectCardsList, Title } from "../index";

import styles from "./style.module.css";

const Plan = ({ list, mounth, titlesList }) => {
  return (
    <section className={styles.plan}>
      <Title titlesList={titlesList[0]} type={"xl"} />
      <DateBar />
      <Title titlesList={titlesList[1]} type={"s"}/>
      <div className={styles.planItem}>
        <ObjectCardsList list={list} mounth={mounth} titlesList={titlesList} />
      </div>
    </section>
  );
};

export default Plan;
