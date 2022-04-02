import styles from "./style.module.css";
import cn from "classnames";
import ObjectCardsList from "components/ObjectCardsList";
import Navigation from "components/Navigation";
import WorkSchedule from "components/WorkSchedule";

const Main = ({ list, mounth, titlesList }) => {
  return (
    <main className={styles.main}>
      <Navigation />
      <ObjectCardsList list={list} mounth={mounth} titlesList={titlesList} />
    </main>
  );
};

export default Main;
