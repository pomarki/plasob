import styles from "./style.module.css";
import cn from "classnames";
import { arrow } from "icons";

const Button = ({ title, type, size, visibility, onClick = () =>{} }) => {
  const buttonSize = "buttonSize_" + size;
  let isVisible;
  visibility ? isVisible = "" : isVisible = styles.button_hide;

  function handleClick() {
    onClick();
  }

  return (
    <button
      onClick={handleClick}
      className={cn(styles.button, styles[buttonSize], isVisible)}
    >
      {title}
    </button>
  );
};

export default Button;
