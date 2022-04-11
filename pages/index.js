import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import objects from "configs/odjects";
import holidays from "configs/holiday";
import { Header, Main } from "../components";
import { useState } from "react";
import titles from "configs/titles";

function Home() {
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(2022);
  let fullMonth = [];

  const getHoliday = (date, arr) => {
    let dateValue = date.getDate();
    let monthValue = date.getMonth();
    let holidayValue = arr[monthValue].days.includes(dateValue);

    return holidayValue;
  };

  const getFullMonth = (year, month) => {
    let currentDay = new Date();

    for (let i = 1; i <= 31; i++) {
      currentDay.setFullYear(year, month, i);
      if (currentDay.getMonth() === month) {
        fullMonth[i - 1] = {
          id: i,
          date: currentDay.getDate(),
          weekDay: currentDay.getDay(),
          month: currentDay.getMonth(),
          holiday: getHoliday(currentDay, holidays),
        };
      }
    }

    return fullMonth;
  };

  return (
    <>
      <Header />
      <Main
        list={objects}
        year={year}
        month={month}
        titlesList={titles}
        fullMonth={getFullMonth(year, month)}
      />
    </>
  );
}

export default Home;
