import styles from "./style.module.css";
import cn from "classnames";
import ObjectCardsList from "components/ObjectCardsList";
import Navigation from "components/Navigation";
import WorkSchedule from "components/WorkSchedule";

const Main = ({ list, mounth }) => {
  return (
    <main className={styles.main}>
      <Navigation />
      <ObjectCardsList list={list} mounth={mounth} />
    </main>
  );
};

export default Main;
