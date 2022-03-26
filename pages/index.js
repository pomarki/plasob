import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import objects from "./configs/odjects";
import { Header, ObjectCardsList, ObjectCard } from './components'


function Home() {
  return (
    <>
    <Header />
    <ObjectCardsList list={objects} />
    </>
  )
}

export default Home;