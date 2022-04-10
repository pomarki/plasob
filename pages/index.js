import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import objects from "configs/odjects";
import { Header, Main } from "../components";
import { useState } from "react";
import titles from "configs/titles";

function Home() {
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2022);
  let fullMonth = [];

  // [{id: 1, date: "2022-01-23", weekDay: 3, holiday: true}]
  //
  //

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
          holiday: false,
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
        fullMonth={getFullMonth(2022, 1)}
      />
    </>
  );
}

export default Home;
