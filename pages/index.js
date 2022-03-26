import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import objects from "./configs/odjects";
import { Header, ObjectCardsList, ObjectCard } from './components';
import { useState } from 'react';



function Home() {

  const [month, setMonth] = useState(1);

  return (
    <>
    <Header />
    <ObjectCardsList list={objects} month={month} />
    </>
  )
}

export default Home;