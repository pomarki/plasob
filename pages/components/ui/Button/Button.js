import styles from "./style.module.css";
import cn from "classnames";

const Button = ({ title, type, size }) => {
  const buttonSize = "buttonSize_" + size;

  return (
    <button className={cn(styles.button, styles[buttonSize])}>{title}</button>
  );
};

export default Button;
