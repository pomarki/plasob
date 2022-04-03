import styles from "./style.module.css";
import cn from "classnames";
import { Button } from "components/ui";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <Button size={"s"} icon={"ArrowDown"} visibility={true} />
    </div>
  );
};
export default Filter;
