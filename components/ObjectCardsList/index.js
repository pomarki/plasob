import styles from "./style.module.css";  
import { ObjectCard } from "../index";
import { useState } from "react";

const ObjectCardsList = ({ list, month, titlesList, fullMonth }) => {

const [currentWorkMonth, setCurrentWorkMonth] = useState(fullMonth);


  function chooseWorkingDate(choosenDay) {
    let durationWork = workDays.finish - workDays.start + 1;
    let workObj = { start: 0, finish: 0 };
    let isActive = fullMonth[choosenDay - 1].isActive;
  }


  return (
    <section className={styles.cardListContainer}>
      <div>
        {list.map((item) => {
          return (
            <ObjectCard
              key={item.id}
              id={item.id}
              obj={item.obj}
              branch={item.branch}
              town={item.town}
              address={item.address}
              phone={item.phone}
              mode={item.mode}
              month={month}
              currentWorkMonth={currentWorkMonth}
              chooseWorkingDate={chooseWorkingDate}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ObjectCardsList;
