import styles from "./style.module.css";
import cn from "classnames";
import { Navigation, Plan } from "../index";

const Main = ({ list, mounth, titlesList }) => {
  
  return (
    <main className={styles.main}>
      <Navigation />
      <Plan list={list} mounth={mounth} titlesList={titlesList} />
    </main>
  );
};

export default Main;
