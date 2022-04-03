import styles from "./style.module.css";
import cn from "classnames";
import { useState } from "react";

const Button = ({
  title,
  type,
  icon,
  size,
  visibility,
  onClick = () => {},
}) => {
  const buttonSize = "buttonSize_" + size;
  const iconType = "button_icon" + icon;
  let isVisible;
  visibility ? (isVisible = "") : (isVisible = styles.button_hide);

  const [active, setActive] = useState(false);

  function handleClick() {
    onClick();
    setActive(!active);
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        styles.button,
        styles[buttonSize],
        styles[iconType],
        isVisible
      )}
    >
      {title}
    </button>
  );
};

export default Button;
