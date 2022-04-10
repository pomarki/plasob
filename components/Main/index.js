import styles from "./style.module.css";
import cn from "classnames";
import { Navigation, Plan } from "../index";
import weekDays from "configs/week";

const Main = ({ list, mounth, year, fullMonth, titlesList }) => {

  console.log(fullMonth);

  return (
    <main className={styles.main}>
      <Navigation />
      <Plan list={list} mounth={mounth} year={year} titlesList={titlesList} />
    </main>
  );
};

export default Main;
