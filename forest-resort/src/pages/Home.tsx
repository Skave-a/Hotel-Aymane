import React from 'react'
import Hero from '../components/Hero/Hero'
import styles from "../components/Hero/Hero.module.css";

export const Home = () => {
  return (
    <Hero children={'undefined'} hero={styles.defaultHero} />
  )
}
