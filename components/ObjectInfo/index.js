import styles from "./style.module.css";
import cn from "classnames";

const ObjectInfo = ({ address, phone, mode }) => {
  return (
    <div>
      <p
        className={cn(
          styles.cardItem,
          styles.cardItem__subtitle,
          cardItemVisible
        )}
      >
        адрес:
      </p>
      <p
        className={cn(styles.cardItem, styles.cardItem__info, cardItemVisible)}
      >
        {address}
      </p>
      <p
        className={cn(
          styles.cardItem,
          styles.cardItem__subtitle,
          cardItemVisible
        )}
      >
        телефон:
      </p>
      <p
        className={cn(styles.cardItem, styles.cardItem__info, cardItemVisible)}
      >
        {phone}
      </p>
      <p
        className={cn(
          styles.cardItem,
          styles.cardItem__subtitle,
          cardItemVisible
        )}
      >
        режим:
      </p>
      <p
        className={cn(styles.cardItem, styles.cardItem__info, cardItemVisible)}
      >
        {mode}
      </p>
    </div>
  );
};

export default ObjectInfo;
