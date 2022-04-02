import styles from "./style.module.css";
import cn from "classnames";

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

  function handleClick() {
    onClick();
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
