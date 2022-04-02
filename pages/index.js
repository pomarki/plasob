import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import objects from "configs/odjects";
import { Header, ObjectCardsList, ObjectCard, Main } from "../components";
import { useState } from "react";
import titles from "configs/titles";

function Home() {
  const [month, setMonth] = useState(1);

  return (
    <>
      <Header />
      <Main list={objects} month={month} titlesList={titles} />
    </>
  );
}

export default Home;
